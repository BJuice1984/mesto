const setEventListeners = () => {
  const formElement = document.querySelector('.popup__input-form');
  formElement.addEventListener('submit', evt => evt.preventDefault());
  const inputList = Array.from(formElement.querySelectorAll('.popup__input-text'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(formElement, buttonElement);
    })
  })
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input-form_type_error');
  errorElement.classList.remove('popup__input-form-error_active');
  errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.add('popup__input-form_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-form-error_active');
};

const toggleButtonState = (formElement, buttonElement) => {
  const isFormValid = formElement.checkValidity();
    buttonElement.classList.toggle('popup__save-button_disabled', !isFormValid);
    buttonElement.disabled = !isFormValid;
};

setEventListeners();



// const showInputError = (formElement, inputElement, errorMessage) => {
// const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
// inputElement.classList.add('popup__input-form_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__input-form-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   inputElement.classList.remove('popup__input-form_type_error');
//   errorElement.classList.remove('popup__input-form-error_active');
//   errorElement.textContent = '';
// }

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input-text'));
//   const buttonElement = formElement.querySelector('.popup__save-button');
//   toggleButtonState(inputList,buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList,buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__input-form'));
//   console.log(formList);
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners();
//   });
// };

// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся фунцкция
//     // hasInvalidInput вернёт true

//     return !inputElement.validity.valid;
//   })
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__button_disabled')
//   }
//   else {
//     buttonElement.classList.remove('popup__button_disabled')
//   }
// };

// enableValidation();


