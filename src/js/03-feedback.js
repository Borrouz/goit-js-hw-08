
import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');
const LOCALST_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onInput, 500));
function onInput (e) {
    const data = JSON.parse(localStorage.getItem(LOCALST_KEY)) || {};
    data[e.target.name ]= e.target.value;
    localStorage.setItem(LOCALST_KEY, JSON.stringify(data));

}
window.addEventListener('load', onLoad);
function onLoad() {
    const dataOn = JSON.parse(localStorage.getItem(LOCALST_KEY))
    if (dataOn) {
        textarea.value = dataOn.message ? dataOn.message : '';
        email.value = dataOn.email;
    }
}
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault()
    if (!email.value || !textarea.value) {
        alert ('Будь ласка, заповніть усі поля');
    } else {
        console.log(JSON.parse(localStorage.getItem(LOCALST_KEY)));
        localStorage.removeItem(LOCALST_KEY)
        form.reset()
    }
}

