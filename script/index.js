import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

const formValidator = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error'
});

formValidator.enableValidation();

//-----------------------------ПОПАП ПРОФИЛЬ-----------------------------------------------------//
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('.popup__close-button_profile');
const popupProfile = document.querySelector('#profilePopup');
const profileName = document.querySelector('.profile__name');
const profileDetails = document.querySelector('.profile__details');
const inputNameFormProfile = document.querySelector('#profileName-input');
const inputDetailsFormProfile = document.querySelector('#profileDetails-input');
const formProfile = document.querySelector('#profile-form');

//-----------ПОПАП ДОБАВЛЕНИЕ КАРТОЧКИ--------------//
const buttonOpenPopupAddNewCard = document.querySelector('.profile__add-button');
const buttonClosePopupAddNewCard = document.querySelector('.popup__close-button_addNewCard');
const popupAddNewCard = document.querySelector('#addNewCardPopup');
const formAddNewCard = document.querySelector('#addNewCard-form');
const nameInputFormAddNewCard = document.querySelector('#newCardName-input');
const linkInputFormAddNewCard = document.querySelector('#newCardLink-input');
const buttonSubmitAddNewCard = document.querySelector('#submit-button');

//----------ШАБЛОН КАРТОЧКИ-----------------//
const template = document.querySelector('#element-template');
const templateContent = template.content;
// const newCardElement = templateContent.querySelector('.element');
// const cardElements = document.querySelector('.elements');

//---------ПОПАП КАРТИНКИ В ПОЛНОМ РАЗМЕРЕ (в классе Card)--------------------------//

function openPopupProfile() {
  inputNameFormProfile.value = profileName.textContent;
  inputDetailsFormProfile.value = profileDetails.textContent;
  openPopup(popupProfile);
}

buttonOpenPopupProfile.addEventListener('click', openPopupProfile);

buttonClosePopupProfile.addEventListener('click', function () {
  closePopup(popupProfile);
});

formProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = inputNameFormProfile.value;
  profileDetails.textContent = inputDetailsFormProfile.value;
  closePopup(popupProfile);
});

const keyOfEsc = 27;
function handleEscKey(evt) {
  if (evt.keyCode === keyOfEsc) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function handleOverlayClick(evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.target === popup) {
    closePopup(popup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscKey);
  document.addEventListener('mousedown', handleOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscKey);
  document.removeEventListener('mousedown', handleOverlayClick);
}

function disableSubmitButton() {
  const submitButton = formAddNewCard.querySelector('.popup__submit-button');
  submitButton.setAttribute('disabled', 'true');
  submitButton.classList.add('popup__submit-button_disabled');
}

buttonOpenPopupAddNewCard.addEventListener('click', function () {
  openPopup(popupAddNewCard);
});

buttonClosePopupAddNewCard.addEventListener('click', function () {
  closePopup(popupAddNewCard);
});

formAddNewCard.addEventListener('submit', event => {
  event.preventDefault();

  const item = {
    name: nameInputFormAddNewCard.value,
    link: linkInputFormAddNewCard.value
  };

  const newCard = new Card(item, '#element-template');
  const cardElement = newCard.generateCard();
  document.querySelector('.elements').prepend(cardElement);

  closePopup(popupAddNewCard);

  disableSubmitButton();

  form.reset();
});
