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

const popupElement = document.querySelector('#fullImagePopup');
const popupImage = document.querySelector('.popup__fullImage');
const popupImageTitle = document.querySelector('.popup__fullImageTitle');
const popupCloseButton = document.querySelector('.popup__close-button_fullImage');
const popupOverlayElement = document.querySelector('.popup_overlay');

export { popupElement, popupImage, popupImageTitle, popupCloseButton };

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleEscapeKey = this._handleEscapeKey.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  _getNewCard() {}

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__place-name').textContent = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    popupElement.classList.add('popup_opened');
    popupImage.src = this._link;
    popupImageTitle.textContent = this._name;

    document.addEventListener('keydown', this._handleEscapeKey);
    popupOverlayElement.addEventListener('click', this._handleOverlayClick);
  }
  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscapeKey);
    popupOverlayElement.removeEventListener('click', this._handleOverlayClick);
  }

  _handleEscapeKey(event) {
    if (event.key === 'Escape') {
      this._handleClosePopup();
    }
  }

  _handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this._handleClosePopup();
    }
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector('.element__image');
    cardImage.addEventListener('click', () => {
      this._handleOpenPopup();
    });
    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
    const buttonDeleteCard = this._element.querySelector('.element__delete-button');
    buttonDeleteCard.addEventListener('click', () => {
      this._element.remove();
    });
    const buttonLikeCard = this._element.querySelector('.element__like-button');
    buttonLikeCard.addEventListener('click', event => {
      event.target.classList.toggle('element__like-button_active');
    });
  }
}

items.forEach(item => {
  const card = new Card(item, '#element-template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});
