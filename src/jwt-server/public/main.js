let userToken = null;

const create = (id, name, birthday) => {
    fetch('/users', {
        method: 'POST',
        body: JSON.stringify({ id, name, birthday }),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        if (res.ok) {
            alert('Sign Up!');
        } else {
            alert('Error');
        }
    });
};

const getMe = () => {
    fetch('/auth/me', {
        headers: { 'Authorization': `Bearer ${userToken}` }
    }).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
                console.log('user:', user);
                alert(`name: ${user.name}, birthday: ${user.birthday}`);
            })
        } else {
            alert('Error');
        }
    });
};

const login = (id, name) => {
    fetch('/auth', {
        method: 'POST',
        body: JSON.stringify({ id, name }),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        if (res.ok) {
            res.text().then((token) => {
                userToken = token;
                console.log('token:', token);
                alert('Login!');
                getMe();
            })
        } else {
            alert('Error');
        }
    });
};

document.querySelector('#new-user-create').addEventListener('click', () => {
    const id = document.querySelector('#new-user-id').value;
    const name = document.querySelector('#new-user-name').value;
    const birthday = document.querySelector('#new-user-birthday').value;
    create(id, name, birthday);
});

document.querySelector('#user-login').addEventListener('click', () => {
    const id = document.querySelector('#user-id').value;
    const name = document.querySelector('#user-name').value;
    login(id, name);
});
