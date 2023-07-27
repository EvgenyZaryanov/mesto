import { items, cardElements } from '../utils/constants.js';
import { handleClickCard } from '../pages/index.js';

export class Card {
  constructor(data, templateSelector, handleClickCard) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleClickCard = handleClickCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardElements = this._element.querySelector('.elements');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardImageTitle = this._element.querySelector('.element__place-name');
    this._cardImageTitle.textContent = this._name;
    this._cardDeleteButton = this._element.querySelector('.element__delete-button');
    this._cardLikeIcon = this._element.querySelector('.element__like-button');

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleClickCard(this._name, this._link);
    });
    this._cardLikeIcon.addEventListener('click', () => {
      this._handleLikeIcon(this._element);
    });
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this._element);
    });
  }

  _handleLikeIcon() {
    this._cardLikeIcon.classList.toggle('element__like-button_active');
  }
  _handleDeleteCard() {
    this._element.remove();
  }
}

function createCard(item) {
  const card = new Card(item, '.template', handleClickCard);
  const cardElement = card.generateCard();
  return cardElement;
}

items.forEach(item => {
  const cardElement = createCard(item);
  cardElements.prepend(cardElement);
});
