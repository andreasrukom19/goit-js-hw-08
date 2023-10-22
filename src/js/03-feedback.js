import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
let dataForm = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;

if (dataForm) {
  email.value = dataForm.email || '';
  message.value = dataForm.message || '';
}


form.addEventListener('input', throttle(addDataForm, 500));
form.addEventListener('submit', formSubmit);

function addDataForm() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(dataForm));
}

function formSubmit(event) {
  event.preventDefault();
  console.log({email: email.value, message: message.value});
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all fields of the form!');
  }

  localStorage.removeItem(KEY);
  event.currentTarget.reset();
  dataForm = {};
}