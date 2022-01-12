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

import { Card } from './Card.js';

const cardTemplate = document.querySelector('.template').content;
const cardContainer = document.querySelector('.elements');

function createCard(item) {
  const card = new Card(item, cardTemplate);
  const cardElement = card.render();
  return cardElement;
};

initialCards.forEach((items) => {
  const newElements = createCard(items);
  cardContainer.prepend(newElements);
});

import { validateData } from './validateData.js';
import { FormValidator } from './Validate.js';
import { openPopup, closePopup } from './popup.js';


// console.log(validateData)
// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
const formElementAdd = document.querySelector('.popup__input-form_type_add'); //Карточка
// console.log(formElementAdd)
// console.log(formElementEdit)


// // создать экземпляры валидаторов всех форм
// const formValidators = {}

// // Включение валидации
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector))
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(formElement, config)
// // получаем данные из атрибута `name` у формы
//     const formName = formElement.getAttribute('name')

//    // вот тут в объект записываем под именем формы
//     formValidators[formName] = validator;
//    validator.enableValidation();
//   });
// };

// enableValidation(validateData);

// console.log(formValidators)


const addFormValidator = new FormValidator(validateData, formElementAdd);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validateData, formElementEdit);
editFormValidator.enableValidation();

// Находим поля формы в formElement
const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль
const infoInputAdd = formElementAdd.querySelector('.popup__input-text_type_name'); //Карточка
const descriptionInputAdd = formElementAdd.querySelector('.popup__input-text_type_link'); //Карточка
// Находим поля профиля в DOM
const infoProfile = document.querySelector('.profile__info');
const descriptionProfile = document.querySelector('.profile__description');

const popupElementEdit = document.querySelector('.popup_type_edit'); //Профиль

const popupElementAdd = document.querySelector('.popup_type_add'); //Карточка

const editButton = document.querySelector('.button_type_edit'); //Профиль

const addButton = document.querySelector('.button_type_add'); //Карточка

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

  const createNewElement = createCard({ name: nameInputElement, link: linkInputElement });

  cardContainer.prepend(createNewElement);

  cleanInput();

  closePopup(popupElementAdd);
}

editButton.addEventListener('click', () => {
  editFormValidator.clearError();
  openPopup(popupElementEdit);
  infoInputEdit.value = infoProfile.textContent; //Запись в форму значений из профиля
  descriptionInputEdit.value = descriptionProfile.textContent; //Запись в форму значений из профиля
});

addButton.addEventListener('click', () => {
  addFormValidator.clearError();
  openPopup(popupElementAdd);
  cleanInput();

});

formElementEdit.addEventListener('submit', handleFormEditSubmit);

formElementAdd.addEventListener('submit', handleFormAddSubmit);
