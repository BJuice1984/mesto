import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._currentForm = this._popup.querySelector('.popup__input-form');
    this._currentFormInputs = this._currentForm.querySelectorAll('.popup__input-text');
    this._popupSaveButton = this._popup.querySelector('.popup__save-button');
  }

  _getInputValues() {
    const inputList = {}
    this._currentFormInputs.forEach(item => {
      inputList[item.name] = item.value;
      // console.log(inputList)
    })
    return inputList;
  }

  setEventListeners() {
    this._currentForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    })
    super.setEventListeners();
  }

  closePopup() {
    this._currentForm.reset();
    super.closePopup();
  }

  setSubmitCallback(callback) {
    this._handleFormSubmit = callback;
  }

  renderLoading(text)  {
    this._popupSaveButton.textContent = text;
  }


}
