function findForm(formSelector) {
  return document.querySelector(formSelector);
}

function findInputs(formElement, inputSelector) {
  return Array.from(formElement.querySelectorAll(inputSelector));
}

function findSubmitButton(formElement, submitButtonSelector) {
  return formElement.querySelector(submitButtonSelector);
}

// Добавление класса ошибки инпутам

function showInputError(inputElement, errorClass, inputErrorClass) {
  inputElement.classList.add(inputErrorClass);
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
}

// Удаление класса ошибки у инпутов

function hideInputError(inputElement, errorClass, inputErrorClass) {
  inputElement.classList.remove(inputErrorClass);
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
}

// Проверка валидности полей

function checkInputValidity(inputElement, errorClass, inputErrorClass) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, errorClass, inputErrorClass);
  } else {
    hideInputError(inputElement, errorClass, inputErrorClass);
  }
}

// ------------------------------ //

function hasInvalidInput(inputs) {
  return inputs.some(inputElement => !inputElement.validity.valid);
}

// Включение и выключение кнопки отправки формы

function toggleButtonState(inputs, submitButtonSelector, inactiveButtonClass) {
  if (hasInvalidInput(inputs)) {
    submitButtonSelector.classList.add(inactiveButtonClass);
    submitButtonSelector.disabled = true;
  } else {
    submitButtonSelector.classList.remove(inactiveButtonClass);
    submitButtonSelector.disabled = false;
  }
}

// Добавление обработчиков событий на все инпуты и кнопку отправки формы

function setEventListeners(
  formElement,
  { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }
) {
  const inputs = findInputs(formElement, inputSelector);
  const submitButtonElement = findSubmitButton(formElement, submitButtonSelector);
  toggleButtonState(inputs, submitButtonElement, inactiveButtonClass);
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, errorClass, inputErrorClass);
      toggleButtonState(inputs, submitButtonElement, inactiveButtonClass);
    });
  });
}

// Включение валидации всех форм на странице

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement, {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    });
  });
}

// Включение валидации вызовом enableValidation

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error'
});
