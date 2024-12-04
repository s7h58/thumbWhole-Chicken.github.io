function handleButtonClick(selected) {
    const takeoutButton = document.getElementById('Packaging');
    const dineinButton = document.getElementById('Hall');

    if (selected === 'takeout') {
        takeoutButton.classList.add('active');
        takeoutButton.classList.remove('inactive');
        dineinButton.classList.add('inactive');
        dineinButton.classList.remove('active');

        // 페이지 이동
        window.location.href = 'http://127.0.0.1:5500/index.html'; // 포장 페이지 URL
    } else if (selected === 'dinein') {
        dineinButton.classList.add('active');
        dineinButton.classList.remove('inactive');
        takeoutButton.classList.add('inactive');
        takeoutButton.classList.remove('active');

        // 페이지 이동
        window.location.href = 'http://127.0.0.1:5500/Hall/index.html'; // 매장 페이지 URL
    }
}
