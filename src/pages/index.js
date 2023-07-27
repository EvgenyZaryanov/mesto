import './index.css';

import { Card } from '..//components/Card.js';
import { FormValidator, formSelectors } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formProfileValid = new FormValidator(formSelectors, formProfile);
formProfileValid.enableValidation();
const formAddNewCardValid = new FormValidator(formSelectors, formAddNewCard);
formAddNewCardValid.enableValidation();

import {
  closeButtons,
  buttonOpenPopupProfile,
  popupProfile,
  profileName,
  profileDetails,
  inputNameFormProfile,
  inputDetailsFormProfile,
  formProfile,
  buttonOpenPopupAddNewCard,
  popupAddNewCard,
  formAddNewCard,
  nameInputFormAddNewCard,
  linkInputFormAddNewCard,
  keyOfEsc,
  popupFullImage,
  popupFullImageItem,
  popupFullImageTitle,
  cardElements
} from '../utils/constants.js';

buttonOpenPopupProfile.addEventListener('click', function () {
  openPopup(popupProfile);
  formProfileValid.disableSubmitButton();
  inputNameFormProfile.value = profileName.textContent;
  inputDetailsFormProfile.value = profileDetails.textContent;
});

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = inputNameFormProfile.value;
  profileDetails.textContent = inputDetailsFormProfile.value;
  closePopup(popupProfile);
});

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

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscKey);
  document.addEventListener('mousedown', handleOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscKey);
  document.removeEventListener('mousedown', handleOverlayClick);
}

buttonOpenPopupAddNewCard.addEventListener('click', function () {
  openPopup(popupAddNewCard);
  formAddNewCardValid.disableSubmitButton();
});

export function handleClickCard(name, link) {
  popupFullImageItem.src = link;
  popupFullImageItem.alt = name;
  popupFullImageTitle.textContent = name;
  openPopup(popupFullImage);
}

formAddNewCard.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;

  const item = {
    name: nameInputFormAddNewCard.value,
    link: linkInputFormAddNewCard.value
  };

  function createCard(item) {
    const card = new Card(item, '.template', handleClickCard);
    const cardElement = card.generateCard();
    return cardElement;
  }

  const cardElement = createCard(item);
  cardElements.prepend(cardElement);

  closePopup(popupAddNewCard);

  event.target.reset(form);

  return cardElement;
});

const cardList = new Section(
  {
    items: initialCards,
    renderer: item => {
      const card = createCard(item);
      cardList.addItem(card);
    }
  },
  cardElements
);
cardList.renderItems();

const popupWithImage = new PopupWithImage('#fullImagePopup');
popupWithImage.setEventListeners();

const popupWithForm = new PopupWithForm({
  popupSelector: addNewCardPopup,
  handleFormSubmit: data => {
    const card = createCard(data);
    cardList.prependItem(card);
  }
});
popupWithForm.setEventListeners();

buttonOpenPopupAddNewCard.addEventListener('click', () => {
  popupWithForm.openPopup();
});

const userInfo = new UserInfo(profileName, profileDetails);
userInfo.setUserInfo(userData);
