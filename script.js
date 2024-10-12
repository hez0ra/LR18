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

    const nameReg = /^[A-Za-z]{3,30} [A-Za-z]{3,30}$/;
    const emailReg = /^[A-Za-z]{2,}@[A-Za-z]{2,}.[A-Za-z]{2,}$/;
    const numberReg = /^+?375\s?$/
    if(!nameReg.test(name__) || !name__.length() <= 30){
        alert("invalid name");
    }
    if(!emailReg.test(email_)){
        alert('invalid email');
    }

    
}