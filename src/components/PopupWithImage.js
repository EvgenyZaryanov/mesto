import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._elementImage = this._popup.querySelector('.element__image');
    this._elementImageTitle = this._popup.querySelector('.element__place-name');
  }

  openPopup(evt) {
    super.openPopup();
    this._elementImage.src = evt.target.src;
    this._elementImage.alt = this._elementImageTitle.textContent = evt.target.alt;
  }
}
