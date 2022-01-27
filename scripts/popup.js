export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupByEsc = this._closePopupByEsc.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupByEsc);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupByEsc);
  }

  addEventListener() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.closePopup();
      }
    })
  }

  _closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }
}




// const popupList = document.querySelectorAll('.popup');

// popupList.forEach((popupElement) => {
//   popupElement.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popupElement)
//     }
//     if (evt.target.classList.contains('popup__close-button')) {
//       closePopup(popupElement)
//     }
//   })
// });

// function closePopupByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup)
//   }
// }

// function openPopup(popupElement) {
//   popupElement.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupByEsc);
// }

// function closePopup(popupElement) {
//   popupElement.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupByEsc);
// }

// export { openPopup, closePopup
