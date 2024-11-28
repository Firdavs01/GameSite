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