export class FormValidator {
  constructor(validateData, formElement) {
    this._formSelector = validateData.formSelector;
    this._inputSelector = validateData.inputSelector;
    this._submitBtnSelector = validateData.submitBtnSelector;
    this._inactiveButtonClass = validateData.inactiveButtonClass;
    this._inputErrorClass = validateData.inputErrorClass;
    this._errorClass = validateData.errorClass;
    this._closeButtonSelector = validateData.closeButtonSelector;
    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _showInputError(inputElement, errorMessage) {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _toggleButtonState(buttonElement) {
    const isFormValid = this._formElement.checkValidity();
      buttonElement.classList.toggle(this._inactiveButtonClass, !isFormValid);
      buttonElement.disabled = !isFormValid;
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._buttonElement);
      })
    })
  };

  enableValidation() {
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitBtnSelector);
      this._formElement.addEventListener('submit', evt => evt.preventDefault());
      this._setEventListeners();
  };

  clearError() {
    this._toggleButtonState(this._buttonElement);
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
}
