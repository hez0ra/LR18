const name_ = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const birthday = document.getElementById('birthday');
const message = document.getElementById('message');
const button = document.getElementById('check');

button.onclick = () => {
    const name__ = name_.value.trim();
    const email_ = email.value.trim();
    const number_ = number.value.trim();
    const birthday_ = birthday.value.trim();
    const message_ = message.value.trim();

    const nameReg = /^[А-Яа-я]{3,30} [А-Яа-я]{3,30}$/;
    alert(nameReg.test(name__)); 
    
}