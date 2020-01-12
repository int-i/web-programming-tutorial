const find = (id) => {
    // See: https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95,
    //      https://joshua1988.github.io/web-development/javascript/promise-for-beginners/,
    //      https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch(`/users/${id}`).then((res) => {
        // 응답이 정상적이면(=404등이 아니면)
        if (res.ok) {
            // JSON 형식으로 변환
            res.json().then((user) => {
                // 로그 입력하기
                console.log('user:', user);
                // 팝업창 보여주기
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

// id="find"인 요소(Element)를 찾아서 클릭시 실행되는 함수를 붙여줌
document.querySelector('#find').addEventListener('click', () => {
    // id="user-id"인 요소(Element)의 값
    const input = document.querySelector('#user-id').value;
    console.log('input:', input);
    if (input === 'all') {
        getAll();
    } else {
        find(input);
    }
});
