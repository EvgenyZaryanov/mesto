import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__fullImage');
    this._popupName = this._popup.querySelector('.popup__fullImageTitle');
  }

  open({ name, link }) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupName.textContent = name;
    super.open();
  }
}
