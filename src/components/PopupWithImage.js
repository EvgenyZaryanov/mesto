import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupOpenImagePhoto = this._popup.querySelector('.popup__fullImage');
    this._popupOpenImageTitle = this._popup.querySelector('.popup__fullImageTitle');
  }

  open = (name, link) => {
    this._popupOpenImagePhoto.src = link;
    this._popupOpenImagePhoto.alt = name;
    this._popupOpenImageTitle.textContent = name;
    super.open();
  };
}
