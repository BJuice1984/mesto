const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  const isFormValid = formElement.checkValidity();
    buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
    buttonElement.disabled = !isFormValid;
};


const setEventListeners = (formElement, { inputSelector, submitButtonSelector,
                           inactiveButtonClass, inputErrorClass, errorClass, closeButtonSelector }) => {
  formElement.addEventListener('submit', evt => evt.preventDefault());
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  // toggleButtonState(formElement, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, {inputErrorClass, errorClass});
      toggleButtonState(formElement, buttonElement, inactiveButtonClass);
    })
  })
};

const enableValidation = (config) => {
  const { formSelector, inputSelector, submitButtonSelector,
          inactiveButtonClass, inputErrorClass, errorClass, closeButtonSelector } = config
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form) => {
    const newObj = { inputSelector, submitButtonSelector,
                     inactiveButtonClass, inputErrorClass, errorClass, closeButtonSelector };
    setEventListeners(form, newObj);
    })
  };

  const validationConfig = {
    formSelector: '.popup__input-form',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__input-form-error_active',
    closeButtonSelector: '.popup__close-button'
  }


  enableValidation(validationConfig);



