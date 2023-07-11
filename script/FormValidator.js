export class FormValidator {
  constructor(settings) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _findForm() {
    return document.querySelector(this._formSelector);
  }

  _findInputs(formElement) {
    return Array.from(formElement.querySelectorAll(this._inputSelector));
  }

  _findSubmitButton(formElement) {
    return formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputs) {
    return inputs.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState(inputs, submitButtonElement) {
    if (this._hasInvalidInput(inputs)) {
      submitButtonElement.classList.add(this._inactiveButtonClass);
      submitButtonElement.disabled = true;
    } else {
      submitButtonElement.classList.remove(this._inactiveButtonClass);
      submitButtonElement.disabled = false;
    }
  }

  _setEventListeners(formElement) {
    const inputs = this._findInputs(formElement);
    const submitButtonElement = this._findSubmitButton(formElement);

    this._toggleButtonState(inputs, submitButtonElement);

    inputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputs, submitButtonElement);
      });
    });
  }

  enableValidation() {
    const forms = Array.from(document.querySelectorAll(this._formSelector));
    forms.forEach(formElement => {
      formElement.addEventListener('submit', evt => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  }
}
