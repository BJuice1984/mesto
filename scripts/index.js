// Находим форму в DOM
let formElement = document.querySelector('.popup__input-form');
// Находим поля формы в DOM
let infoInput = document.querySelector('.popup__input-text_type_name');
let descriptionInput = document.querySelector('.popup__input-text_type_description');
// Находим поля профиля в DOM
let infoProfile = document.querySelector('.profile__info');
let descriptionProfile = document.querySelector('.profile__description');

const popupElement = document.querySelector('.popup');

const closeButton = document.querySelector('.popup__close-button');

const editButton = document.querySelector('.button_type_edit');

function openPopup() {
  popupElement.classList.add('popup_opened');
  infoInput.value = infoProfile.textContent; //Запись в форму значений из профиля
  descriptionInput.value = descriptionProfile.textContent; //Запись в форму значений из профиля
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  infoProfile.textContent = infoInput.value; //Запись в Профиль введенных значений из формы
  descriptionProfile.textContent = descriptionInput.value; //Запись в Профиль введенных значений из формы
  closePopup();
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);

