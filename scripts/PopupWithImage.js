import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._curretPopupName = this._popup.querySelector('.popup__content_type_name');
    this._curretPopupLink = this._popup.querySelector('.popup__content_type_image');
  }

  openPopup(data) {
    this._curretPopupName.textContent = data.name;
    this._curretPopupLink.src = data.link;
    this._curretPopupLink.alt = data.name;
    super.openPopup();
  }
}
