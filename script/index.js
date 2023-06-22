const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('.popup__close-button_profile');
const popupProfile = document.querySelector('#profilePopup');
const profileName = document.querySelector('.profile__name');
const profileDetails = document.querySelector('.profile__details');
const inputNameFormProfile = document.querySelector('#profileName-input');
const inputDetailsFormProfile = document.querySelector('#profileDetails-input');
const formProfile = document.querySelector('#profile-form');
//-------------------------------------------//
const buttonOpenPopupAddNewCard = document.querySelector('.profile__add-button');
const buttonClosePopupAddNewCard = document.querySelector('.popup__close-button_addNewCard');
const popupAddNewCard = document.querySelector('#addNewCardPopup');
const inputNameFormAddNewCard = document.querySelector('#newCardName-input');
const inputLinkFormAddNewCard = document.querySelector('#newCardLink-input');
const formAddNewCard = document.querySelector('#addNewCard-form');
//-------------------------------------------------//
const template = document.querySelector('#element-template');
const templateContent = template.content;
const cardElement = templateContent.querySelector('.element');
const cardElements = document.querySelector('.elements');
//---------------------------------------------//
const popupFullImage = document.querySelector('#fullImagePopup');
const buttonClosePopupFullImage = document.querySelector('.popup__close-button_fullImage');
const fullImageItem = document.querySelector('.popup__fullImage');
const fullImageTitle = document.querySelector('.popup__fullImageTitle');

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
  const popup = document.querySelector('.popup_opened');
  if (evt.keyCode === keyOfEsc) {
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

buttonOpenPopupAddNewCard.addEventListener('click', function () {
  openPopup(popupAddNewCard);
});

buttonClosePopupAddNewCard.addEventListener('click', function () {
  closePopup(popupAddNewCard);
});

formAddNewCard.addEventListener('submit', function (event) {
  event.preventDefault();
  closePopup(popupAddNewCard);
});

buttonClosePopupFullImage.addEventListener('click', function () {
  closePopup(popupFullImage);
});

initialElements.forEach(function (item) {
  const newElement = createElement(item.name, item.link);
  cardElements.prepend(newElement);
});

function createElement(name, link) {
  const newElement = cardElement.cloneNode(true);

  const cardName = newElement.querySelector('.element__place-name');
  cardName.textContent = name;

  const cardImage = newElement.querySelector('.element__image');
  cardImage.src = link;
  cardImage.title = name;
  cardImage.alt = name;

  const cardDescription = newElement.querySelector('.element__image');
  cardDescription.alt = name;

  const cardDelete = newElement.querySelector('.element__delete-button');
  cardDelete.addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  });

  const cardLike = newElement.querySelector('.element__like-button');
  cardLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

  //-----открытие изображения в полном размере------//

  cardImage.addEventListener('click', function () {
    openPopup(popupFullImage);
    fullImageItem.src = link;
    fullImageItem.alt = name;
    fullImageItem.title = name;
    fullImageTitle.textContent = name;
  });

  //--------------------------------------------------------//
  return newElement;
}

// -------------------------------------------- //

formAddNewCard.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);

  const name = values['item-name'];
  const link = values['item-link'];

  const newElement = createElement(name, link);
  cardElements.prepend(newElement);

  form.reset();
});
