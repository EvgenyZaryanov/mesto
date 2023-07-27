//---------------------ОБЩИЕ-------------------//
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const keyOfEsc = 27;
//-----------------------------ПОПАП ПРОФИЛЬ-----------------------------------------------------//
export const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('#profilePopup');
export const profileName = document.querySelector('.profile__name');
export const profileDetails = document.querySelector('.profile__details');
export const inputNameFormProfile = document.querySelector('#profileName-input');
export const inputDetailsFormProfile = document.querySelector('#profileDetails-input');
export const formProfile = document.querySelector('#profile-form');

//-----------ПОПАП ДОБАВЛЕНИЕ КАРТОЧКИ--------------//
export const buttonOpenPopupAddNewCard = document.querySelector('.profile__add-button');
export const popupAddNewCard = document.querySelector('#addNewCardPopup');
export const formAddNewCard = document.querySelector('#addNewCard-form');
export const nameInputFormAddNewCard = document.querySelector('#newCardName-input');
export const linkInputFormAddNewCard = document.querySelector('#newCardLink-input');
export const buttonSubmitAddNewCard = document.querySelector('#submit-button');

//----------ШАБЛОН КАРТОЧКИ-----------------//
export const template = document.querySelector('#element-template');
export const templateContent = template.content;
export const cardElement = templateContent.querySelector('.element');
export const cardImageTitle = cardElement.querySelector('.element__place-name');
export const cardImage = cardElement.querySelector('.element__image');
export const cardDeleteButton = cardElement.querySelector('.element__delete-button');
export const cardLikeIcon = cardElement.querySelector('.element__like-button');
export const popupFullImage = document.querySelector('#fullImagePopup');
export const popupFullImageItem = document.querySelector('.popup__fullImage');
export const popupFullImageTitle = document.querySelector('.popup__fullImageTitle');
export const popupOverlayElement = document.querySelector('.popup_overlay');

export const popupElement = document.querySelector('#fullImagePopup');
export const popupImage = document.querySelector('.popup__fullImage');
export const popupImageTitle = document.querySelector('.popup__fullImageTitle');
export const cardElements = document.querySelector('.elements');

//---------ПОПАП КАРТИНКИ В ПОЛНОМ РАЗМЕРЕ (в классе Card)--------------------------//

export const items = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
