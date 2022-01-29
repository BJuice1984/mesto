import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._currentPopupName = this._popup.querySelector('.popup__content_type_name');
    this._currentPopupLink = this._popup.querySelector('.popup__content_type_image');
  }

  openPopup(data) {
    this._currentPopupName.textContent = data.name;
    this._currentPopupLink.src = data.link;
    this._currentPopupLink.alt = data.name;
    super.openPopup();
  }
}
