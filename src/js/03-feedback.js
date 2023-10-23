import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';

let dataForm = {};

form.addEventListener('input', throttle(addDataForm, 500));
form.addEventListener('submit', formSubmit);

function addDataForm(event) {
  dataForm[event.target.name] = event.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(dataForm));
}

function formSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(KEY);
  event.currentTarget.reset();
  console.log(dataForm);
  dataForm = {};
}

const onLoad = () => {
  try {
    const data = localStorage.getItem(KEY);
    if (!data) return;
    dataForm = JSON.parse(data);
    Object.entries(dataForm).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};
onLoad();