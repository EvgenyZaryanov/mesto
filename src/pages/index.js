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
  cardElements
} from '../utils/constants.js';
//---------------------------------------//

const formProfileValid = new FormValidator(formSelectors, formProfile);
formProfileValid.enableValidation();
formProfileValid.disableSubmitButton();
const formAddNewCardValid = new FormValidator(formSelectors, formAddNewCard);
formAddNewCardValid.enableValidation();
formAddNewCardValid.disableSubmitButton();

function createCard(item) {
  const card = new Card(item, '.template', handleClickCard);
  const cardElement = card.generateCard();
  return cardElement;
}

cardItems.forEach(item => {
  const cardElement = createCard(item);
  cardElements.prepend(cardElement);
});

const popupWithImage = new PopupWithImage('#fullImagePopup');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__details'
});

buttonOpenPopupProfile.addEventListener('click', () => {
  popupEditProfile.open();
  const userDetails = userInfo.getUserInfo();
  inputNameFormProfile.value = userDetails.name;
  inputDetailsFormProfile.value = userDetails.info;
});

const popupEditProfile = new PopupWithForm('.popup-edit', data => {
  userInfo.setUserInfo(data);
  popupEditProfile.close();
});
popupEditProfile.setEventListeners();

//не понимаю почему исчезают строки в профиле после нажатия на кнопку сохранить.

buttonOpenPopupAddNewCard.addEventListener('click', () => {
  popupAddCard.open();
  formAddNewCardValid.enableValidation();
  formAddNewCardValid.disableSubmitButton();
});

const popupAddCard = new PopupWithForm('.popup-add', data => {
  const card = {
    name: data.name,
    link: data.link
  };
  elementList.addItem(createCard(card));
  popupAddCard.close();
});
popupAddCard.setEventListeners();

const elementList = new Section(
  {
    items: cardItems,
    renderer: items => elementList.addItem(createCard(items))
  },
  '.elements'
);
elementList.renderItems();

function handleClickCard(name, link) {
  popupWithImage.open(name, link);
}
