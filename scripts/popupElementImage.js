export function popupElementImage(name, link, alt) {
  const popupElementImage = document.querySelector('.popup_type_image');
  const curretPopupName = popupElementImage.querySelector('.popup__content_type_name');
  const curretPopupImage = popupElementImage.querySelector('.popup__content_type_image');
  const curretPopupAlt = popupElementImage.querySelector('.popup__content_type_image');

  curretPopupName.textContent = name;
  curretPopupImage.src = link;
  curretPopupAlt.alt = alt;
  popupElementImage.classList.add('popup_opened');
}
