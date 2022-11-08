import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[type="email"]'),
  textarea: document.querySelector('.feedback-form textarea'),
}

const LOCALSTORAGE_KEY = 'feedback-form-state';
const localData = {};

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onFormPrint, 500));

fillInutsAfterRefresh();

function onFormPrint(event) {
  localData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localData));
}

function onSubmitForm(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function fillInutsAfterRefresh() {
  const savedContent = localStorage.getItem(LOCALSTORAGE_KEY);
  const convertedContent = JSON.parse(savedContent);

  if (savedContent) {
    refs.email.value = convertedContent.email;
    refs.textarea.value = convertedContent.message;
  }
}