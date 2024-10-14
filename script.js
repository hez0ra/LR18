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
    const numberReg = /^\+?375\s?[\-\(]?\d{2}[\-\)]?\s?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/

    const currentDate = new Date();
    const selectedDate = new Date(birthday_);

    if(!nameReg.test(name__) || name__.length > 30){
        const err = document.getElementById('error-name');
        err.style.display = "inline-block"
    }
    else{
        const err = document.getElementById('error-name');
        err.style.display = "none"
    }
    if(!emailReg.test(email_)){
        const err = document.getElementById('error-email');
        err.style.display = "inline-block"
    }
    else{
        const err = document.getElementById('error-email');
        err.style.display = "none"
    }
    if(!numberReg.test(number_)){
        const err = document.getElementById('error-number');
        err.style.display = "inline-block"
    }
    else{
        const err = document.getElementById('error-number');
        err.style.display = "none"
    }
    if(selectedDate >= currentDate || birthday_ == ''){
        const err = document.getElementById('error-birthday');
        err.style.display = "inline-block"
    }
    else{
        const err = document.getElementById('error-birthday');
        err.style.display = "none"
    }
    if(message_.length < 10 || message_.length > 300){
        const err = document.getElementById('error-message');
        err.style.display = "inline-block"
    }
    else{
        const err = document.getElementById('error-message');
        err.style.display = "none"
    }

    
}