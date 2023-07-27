export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: '.popup__input-error',
  errorClass: '.popup__input-error'
};

export class FormValidator {
  constructor(formSelectors, formElement) {
    this._formSelectors = formSelectors;
    this._formElement = formElement;
    this._formList = Array.from(
      this._formElement.querySelectorAll(this._formSelectors.inputSelector)
    );
    this._errorMessage = this._formElement.querySelector(this._formSelectors.inputErrorClass);
    this._submitButton = this._formElement.querySelector(this._formSelectors.submitButtonSelector);
    this._disabledSubmitButton = this._formElement.querySelector(
      this._formSelectors.inactiveButtonClass
    );
  }

  enableValidation() {
    this._formElement.addEventListener('submit', event => event.preventDefault());
    this._setEventListeners();
  }

  disableSubmitButton() {
    this._submitButton.setAttribute('disabled', 'true');
    this._submitButton.classList.add(this._formSelectors.inactiveButtonClass);
  }

  _showInputError(inputElement, errorClass) {
    inputElement.classList.add(this._formSelectors.inputErrorClass);
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError = (inputElement, errorClass, inputErrorClass) => {
    inputElement.classList.remove(inputErrorClass);
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  };

  _checkInputValidity(inputElement, errorClass, inputErrorClass) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorClass, inputErrorClass);
    } else {
      this._hideInputError(inputElement, errorClass, inputErrorClass);
    }
  }

  _setEventListeners() {
    this._formList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._formList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._formSelectors.inactiveButtonClass);
      this._submitButton.setAttribute('disabled', 'true');
    } else {
      this._submitButton.classList.remove(this._formSelectors.inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }
}
