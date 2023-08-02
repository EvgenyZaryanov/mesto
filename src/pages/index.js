import './index.css';

import { Card } from '..//components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  cardItems,
  formSelectors,
  inputNameFormProfile,
  inputDetailsFormProfile,
  formProfile,
  formAddNewCard,
  buttonOpenPopupProfile,
  buttonOpenPopupAddNewCard,
  popupAddNewCard,
  cardElements,
  template
} from '../utils/constants.js';
//---------------------------------------//

const formProfileValid = new FormValidator(formSelectors, formProfile);
formProfileValid.enableValidation();
formProfileValid.disableSubmitButton();
const formAddNewCardValid = new FormValidator(formSelectors, formAddNewCard);
formAddNewCardValid.enableValidation();
formAddNewCardValid.disableSubmitButton();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__details'
});

const popupWithImage = new PopupWithImage('#fullImagePopup');
popupWithImage.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
  inputNameFormProfile.value = userInfo.getUserInfo().name;
  inputDetailsFormProfile.value = userInfo.getUserInfo().about;
  popupEditProfile.open();
});

const popupEditProfile = new PopupWithForm('#profilePopup', data => {
  userInfo.setUserInfo(data);
  popupEditProfile.close();
});

popupEditProfile.setEventListeners();

buttonOpenPopupAddNewCard.addEventListener('click', () => {
  PopupAddCard.open();
  formAddNewCardValid.disableSubmitButton();
});

const PopupAddCard = new PopupWithForm('#addNewCardPopup', data => {
  const card = {
    name: data.name,
    link: data.link
  };
  section.addItem(createNewCard(card));
  PopupAddCard.close();
});

PopupAddCard.setEventListeners();

const section = new Section(
  {
    items: cardItems,
    renderer: renderCard
  },
  cardElements
);
section.renderItems();

function createNewCard({ name, link }) {
  const card = new Card({ name, link }, template, handleClickCard);
  const cardElement = card.createCard();
  return cardElement;
}

export function handleClickCard(name, link) {
  popupWithImage.open(name, link);
}

function renderCard(cardData) {
  const newCard = createNewCard(cardData);
  section.addItem(newCard);
}
