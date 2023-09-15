import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');
LOCALST_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
function onInput(event) {
    event.preventDefault()
    const data = JSON.parse(localStorage.getItem(LOCALST_KEY)) || {};
    data[event.target.name] = event.target.value;
    localStorage.setItem(LOCALST_KEY, JSON.stringify(data));
    console.log("data on input"+data);
}
form.addEventListener('submit', onSubmit);
function onSubmit() {
    
    if (!email.value || !textarea.value) {
        alert ('Будь ласка, заповніть усі поля')
    } else {
        console.log(`email: ${email.value} message: ${textarea.value}`);
    }
    localStorage.removeItem(LOCALST_KEY);
    JSON.parse(localStorage.getItem(LOCALST_KEY))
    reset(form)
}

window.addEventListener('load', onLoad);
function onLoad() {
    const dataOn = JSON.parse(localStorage.getItem(LOCALST_KEY))
    // console.log(dataOn);
    if (dataOn) {
        textarea.value = dataOn.message ? dataOn.message : '';
        email.value = dataOn.email
    }
    console.log(dataOn)
}