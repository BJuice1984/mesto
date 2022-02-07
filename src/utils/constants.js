export const validateData = {
  formSelector: '.popup__input-form',
  inputSelector: '.popup__input-text',
  submitBtnSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-form-error_active',
  closeButtonSelector: '.popup__close-button'
}

export const cardTemplate = document.querySelector('.template').content;
export const cardContainer = '.elements';
// Находим форму в DOM
export const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
// Находим поля формы в formElement
export const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
export const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль

export const editButton = document.querySelector('.button_type_edit'); //Профиль
export const addButton = document.querySelector('.button_type_add'); //Карточка
export const avatarButton = document.querySelector('.profile__avatar'); //Аватар
