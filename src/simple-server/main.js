// 모듈 가져오기
const polka = require('polka');
const send = require('@polka/send-type');
// public 폴더를 지정한다.
const serve = require('sirv')('public');
// JSON 파일도 읽어올 수 있다.
const users = require('./users');

const { PORT = 3000 } = process.env;

// req: 서버에 들어온 정보(request)
// res: 서버가 보내줄 정보(response)
// See(화살표함수): https://poiemaweb.com/es6-arrow-function
const find = (req, res) => {
    // 사용자 아이디(객체 구조 분해 할당 문법)
    // See: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { id } = req.params;
    // 아이디로 사용자 검색, 없으면 undefined 반환
    // See: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const user = users.find(user => user.id === id);
    // Boolean(undefined) === false
    if (user) {
        // 200 OK 사용자 정보 전송
        send(res, 200, user);
    } else {
        // 404 Not Found 전송
        send(res, 404, null);
    }
};

const getAll = (req, res) => {
    // 200 OK 모든 사용자 정보 전송
    send(res, 200, users);
};

// polka 객체 소환
polka()
    // serve 모듈은 지정한 폴더(public)의 모든 파일을 외부에서 접근 가능하게 한다.
    .use(serve)
    // 브라우저가 GET /users로 접속했을 때 getAll을 실행한다.
    .get('/users', getAll)
    // 브라우저가 GET /users/id로 접속했을 때 find를 실행한다.
    .get('/users/:id', find)
    // 서버를 실행한다.
    .listen(PORT, err => {
        if (err) throw err;
        console.log(`> Running on localhost:${PORT}`);
    });
