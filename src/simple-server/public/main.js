const find = (id) => {
    fetch(`/users/${id}`).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
                console.log('user:', user);
                alert(`name: ${user.name}`);
            });
        } else {
            alert('Error');
        }
    });
};

const getAll = () => {
    fetch('/users').then((res) => {
        if (res.ok) {
            res.json().then((users) => {
                console.log('users:', users);
                alert(`names: ${users.map(user => user.name).join(', ')}`);
            })
        } else {
            alert('Error');
        }
    });
};

document.querySelector('#find').addEventListener('click', () => {
    const input = document.querySelector('#user-id').value;
    console.log('input:', input);
    if (input === 'all') {
        getAll();
    } else {
        find(input);
    }
});
