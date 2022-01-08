export class FormValidator {
  constructor(formElement) {
    this._formSelector = '.popup__input-form';
    this._inputSelector = '.popup__input-text';
    this._submitBtnSelector = '.popup__save-button';
    this._inactiveButtonClass = 'popup__save-button_disabled';
    this._inputErrorClass = 'popup__input-text_type_error';
    this._errorClass = 'popup__input-form-error_active';
    this._closeButtonSelector = '.popup__close-button';
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
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitBtnSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(buttonElement);
      })
    })
  };

  enableValidation() {
    const forms = Array.from(document.querySelectorAll(this._formSelector));
    forms.forEach((form) => {
      form.addEventListener('submit', evt => evt.preventDefault());
      this._setEventListeners(form);
    })
  };

  clearError() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    inputList.forEach((inputElement) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    });
  };

}
