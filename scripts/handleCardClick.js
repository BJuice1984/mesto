import { openPopup } from "./Popup.js";

const popupElementImage = document.querySelector('.popup_type_image');
const curretPopupName = popupElementImage.querySelector('.popup__content_type_name');
const curretPopupImage = popupElementImage.querySelector('.popup__content_type_image');

export function handleCardClick(name, link, alt) {
  curretPopupName.textContent = name;
  curretPopupImage.src = link;
  curretPopupImage.alt = alt;
  openPopup(popupElementImage);
}
