const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const polka = require('polka');
const send = require('@polka/send-type');
const serve = require('sirv')('public');
const users = require('./users');

const { PORT = 3000 } = process.env;

// 토큰 인증에 필요한 비밀키(유출되면 안됨)
const JWT_SECRET = '1q2w3e4r!';

const auth = (req, res, next) => {
    // schema = 'Bearer aaa.bbb.ccc' or undefined
    const token = req.headers['authorization'];
    // token이 undefined가 아니고 공백 앞 부분이 'Bearer'인지 확인
    if (token && token.split(' ')[0] === 'Bearer') {
        try {
            const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
            console.log('auth: ok');
            console.log('decoded token:', decoded);
            req.user = users.find(user => user.id === decoded.id);
            next();
        } catch (e) {
            console.log('auth: fail(invalid)');
            // 401 Unauthorized 전송
            send(res, 401);
        }
    } else {
        console.log('auth: fail(no token)');
        // 401 Unauthorized 전송
        send(res, 401);
    }
};

const create = (req, res) => {
    const { id, name, birthday } = req.body;
    console.log('create user:', id);
    // 사용자 추가하기
    users.push({ id, name, birthday });
    // 파일 덮어쓰기
    fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(users, null, 4));
    send(res, 200);
};

const getMe = (req, res) => {
    const { user } = req;
    console.log('get user:', user);
    send(res, 200, user);
};

const login = (req, res) => {
    const { id, name } = req.body;
    const user = users.find(user => user.id === id && user.name === name);
    if (user) {
        console.log('login: ok');
        // JWT 토큰 발급
        var token = jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });
        console.log('token:', token);
        // 토큰 전송
        send(res, 200, token);
    } else {
        console.log('login: fail');
        // id와 name이 맞지 않음
        // 401 Unauthorized 전송
        send(res, 401);
    }
};

polka()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serve)
    .post('/users', create) // 회원가입
    .post('/auth', login) // 로그인
    .get('/auth/me', auth, getMe) // 내 정보
    .listen(PORT, err => {
        if (err) throw err;
        console.log(`> Running on localhost:${PORT}`);
    });
