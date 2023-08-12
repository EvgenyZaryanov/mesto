export class Card {
  constructor(
    { data, handleClickCard, handleClickLike, handleRemoveButtonClick, userId },
    cardSelector
  ) {
    this._isLiked = false;
    data.likes.forEach(obj => {
      if (obj._id === userId) {
        this._isLiked = true;
      }
    });

    this._likes = data.likes.length;
    this._arrayLikes = data.likes;
    this.id = data._id;
    this._title = data.name;
    this._link = data.link;
    this._owner = data.owner._id === userId;
    this._handleClickCard = handleClickCard;
    this._handleClickLike = handleClickLike;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    if (!this._owner) {
      cardElement
        .querySelector('.element__delete-button')
        .classList.remove('element__delete-button_active');
    }
    return cardElement;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('element__like-button_active');
    this._handleClickLike();
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikes(sumLikes) {
    this._likes = sumLikes;
    this._usersLikesElement.textContent = this._likes;
  }

  changeStatus() {
    this._isLiked = !this._isLiked;
  }

  _setEventListeners() {
    this._likesElement.addEventListener('click', evt => {
      this._likeCard(evt);
    });

    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleRemoveButtonClick(this);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleClickCard();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._usersLikesElement = this._element.querySelector('.element__likes-counter');
    this._usersLikesElement.textContent = this._likes;
    this._likesElement = this._element.querySelector('.element__like-button');
    if (this._isLiked) {
      this._likesElement.classList.add('element__like-button_active');
    }
    this._element.querySelector('.element__place-name').textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._setEventListeners();
    return this._element;
  }
}
