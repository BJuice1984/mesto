const popupList = document.querySelectorAll('.popup');

popupList.forEach((popupElement) => {
  popupElement.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popupElement)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popupElement)
    }
  })
});

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

export { openPopup, closePopup }
