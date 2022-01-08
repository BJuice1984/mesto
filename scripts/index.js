const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

import { Card } from './card.js';

const cardTemplate = document.querySelector('.template').content;
const cardContainer = document.querySelector('.elements');

initialCards.forEach((item) => {
  const newItem = new Card(item, cardTemplate);
  newItem.render(cardContainer);
});

import { FormValidator } from './validate.js';

// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
const formElementAdd = document.querySelector('.popup__input-form_type_add'); //Карточка

const addFormValidator = new FormValidator(formElementAdd);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formElementEdit);
editFormValidator.enableValidation();

// Находим поля формы в formElement
const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль
const infoInputAdd = formElementAdd.querySelector('.popup__input-text_type_name'); //Карточка
const descriptionInputAdd = formElementAdd.querySelector('.popup__input-text_type_link'); //Карточка
const saveButtonForAdd = formElementAdd.querySelector('.popup__save-button'); //Карточка
// Находим поля профиля в DOM
const infoProfile = document.querySelector('.profile__info');
const descriptionProfile = document.querySelector('.profile__description');

const popupElementEdit = document.querySelector('.popup_type_edit'); //Профиль

const popupElementAdd = document.querySelector('.popup_type_add'); //Карточка

const editButton = document.querySelector('.button_type_edit'); //Профиль

const addButton = document.querySelector('.button_type_add'); //Карточка

const popupList = document.querySelectorAll('.popup');

popupList.forEach((popupElement) => {
  popupElement.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popupElement)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popupElement)
    }
  })
});

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  const inputClearError = new FormValidator(popupElement);
  inputClearError.clearError();
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

 //Профиль
function handleFormEditSubmit (evt) {
  evt.preventDefault();
  infoProfile.textContent = infoInputEdit.value; //Запись в Профиль введенных значений из формы
  descriptionProfile.textContent = descriptionInputEdit.value; //Запись в Профиль введенных значений из формы
  closePopup(popupElementEdit);
}

function cleanInput() {
  infoInputAdd.value = '';
  descriptionInputAdd.value = '';
};

 //Карточка
const handleFormAddSubmit = (evt) => {
  evt.preventDefault();

  const nameInputElement = infoInputAdd.value;
  const linkInputElement = descriptionInputAdd.value;

  const createNewElement = new Card({ name: nameInputElement, link: linkInputElement }, cardTemplate);

  createNewElement.render(cardContainer);

  cleanInput();

  closePopup(popupElementAdd);
}

editButton.addEventListener('click', () => {
  openPopup(popupElementEdit);
  infoInputEdit.value = infoProfile.textContent; //Запись в форму значений из профиля
  descriptionInputEdit.value = descriptionProfile.textContent; //Запись в форму значений из профиля
});

addButton.addEventListener('click', () => {
  openPopup(popupElementAdd);
  saveButtonForAdd.disabled = true;
  saveButtonForAdd.classList.add('popup__save-button_disabled');
  cleanInput();

});

formElementEdit.addEventListener('submit', handleFormEditSubmit);

formElementAdd.addEventListener('submit', handleFormAddSubmit);
