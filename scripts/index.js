const popupElement = document.querySelector('.popup');

const closeButton = document.getElementById('CloseButton');

const editButton = document.getElementById('EditButton');

const saveButton = document.getElementById('SaveButton');

editButton.addEventListener('click', popupOpen);

closeButton.addEventListener('click', popupClose);

saveButton.addEventListener('click', formSubmitHandler);

// Находим форму в DOM
let formElement = document.querySelector('.popup__input-form');
// Находим поля формы в DOM
let infoInput = document.querySelector('[name="profile-info"]');
let descriptionInput = document.querySelector('[name="profile-description"]');
// Находим поля профиля в DOM
let infoProfile = document.querySelector('.profile__info');
let descriptionProfile = document.querySelector('.profile__description');

function popupOpen() {
  popupElement.classList.add('popup__opened');
  infoInput.value = infoProfile.textContent; //Запись в форму значений из профиля
  descriptionInput.value = descriptionProfile.textContent; //Запись в форму значений из профиля  
}

function popupClose() {
  popupElement.classList.remove('popup__opened');
}

function popupSave() {
  infoProfile.textContent = infoInput.value; //Запись в Профиль введенных значений из формы
  descriptionProfile.textContent = descriptionInput.value; //Запись в Профиль введенных значений из формы
  popupClose();
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  popupSave();
}

formElement.addEventListener('submit', formSubmitHandler);

