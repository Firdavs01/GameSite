let emailBtn = document.querySelector('#emailBtn');

emailBtn.onclick = () => {
    let email = document.querySelector('#emailField').value;
    if (!email.includes('@')) {
        alert('You have not a symbol "@"');
    }
    else if (!email.includes('.')) {
        alert('You have not a symbol "."');
    }
    else {
        alert('You passed!!!!');
    }
}       

// document.querySelector('#btnFr').addEventListener('click', () => {
//     document.querySelector('.modal').classList.add('open');
// })

// document.querySelector('.close__btn').addEventListener('click', () => {
//     document.querySelector('.modal').classList.remove('open');
// })

// window.addEventListener('keydown', () => {
//     if (e.key === 'Escape') {
//         document.querySelector(.modal).classList.remove('open');
//     }
// })

// document.querySelector("#my-modal .modal__box").addEventListener('click', (event) => {
//     event._isClickWithInModal = true;
// })

// document.getElementById('my-modal').addEventListener('click', (event) => {
//     if (event._isClickWithInModal) return ;
//     event.currentTarget.classList.remove('open');
// })