const polka = require('polka');
const send = require('@polka/send-type');
const serve = require('sirv')('public');
const users = require('./users');

const { PORT = 3000 } = process.env;

const find = (req, res) => {
    const { id } = req.params;
    for (const user of users) {
        if (user.id === id) {
            send(res, 200, user);
            return;
        }
    }
    send(res, 404, null);
};

const getAll = (req, res) => {
    send(res, 200, users);
};

polka()
    .use(serve)
    .get('/users', getAll)
    .get('/users/:id', find)
    .listen(PORT, err => {
        if (err) throw err;
        console.log(`> Running on localhost:${PORT}`);
    });
