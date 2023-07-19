export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: '.popup__submit-button_disabled',
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
    this._submitButton = this._formElement.querySelector(this._formSelectors.submitButtonSelector);
  }

  enableValidation() {
    this._formElement.addEventListener('submit', event => event.preventDefault());
    this._setEventListeners();
  }

  disableButton() {
    this._buttonSubmit.setAttribute('disabled', true);
    this._buttonSubmit.classList.add('popup__submit-button_disabled');
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._formSelectors.inputErrorClass);
    errorElement.classList.add(this._formSelectors.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = inputElement => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._formSelectors.inputErrorClass);
    errorElement.classList.remove(this._formSelectors.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
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
      this._submitButton.classList.add('popup__submit-button_disabled');
      this._submitButton.setAttribute('disabled', 'true');
    } else {
      this._submitButton.classList.remove('popup__submit-button_disabled');
      this._submitButton.removeAttribute('disabled');
    }
  }
}
