import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._currentForm = this._popup.querySelector('.popup__input-form');
    this._currentFormInputs = this._currentForm.querySelectorAll('.popup__input-text');
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
}
