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
import { validateData } from './validateData.js';
import { FormValidator } from './FormValidator.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { Section } from './Section.js';

const cardTemplate = document.querySelector('.template').content;
const cardContainer = '.elements';

const handleCardClick = (name, link) => {
  console.log(name, link)
  // const data = {
  //   name: evt.target.closest('.element').querySelector('.element__name'),
  //   link: evt.targer.src
  // };
  popupElementImage.openPopup({name, link});
    // curretPopupName.textContent = name;
    // curretPopupImage.src = link;
    // curretPopupImage.alt = alt;
    // openPopup(popupElementImage);
  }

const cardList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
      const card = new Card(cardItem, cardTemplate, handleCardClick);
      const cardElement = card.render();
      cardList.addItem(cardElement);
    },
  },
  cardContainer
);
cardList.addItems();

function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.render();
  return cardElement;
};


// initialCards.forEach((items) => {
//   const newElements = createCard(items);
//   cardContainer.prepend(newElements);
// });


// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
const formElementAdd = document.querySelector('.popup__input-form_type_add'); //Карточка


const formValidators = {} // создать экземпляры валидаторов всех форм
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name') // получаем данные из атрибута `name` у формы
    formValidators[ formName ] = validator; //в объект записываем под именем формы
   validator.enableValidation();
  });
};
enableValidation(validateData);

// const addFormValidator = new FormValidator(validateData, formElementAdd);
// addFormValidator.enableValidation();
// const editFormValidator = new FormValidator(validateData, formElementEdit);
// editFormValidator.enableValidation();

// Находим поля формы в formElement
const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль
const infoInputAdd = formElementAdd.querySelector('.popup__input-text_type_name'); //Карточка
const descriptionInputAdd = formElementAdd.querySelector('.popup__input-text_type_link'); //Карточка
// Находим поля профиля в DOM
const infoProfile = document.querySelector('.profile__info');
const descriptionProfile = document.querySelector('.profile__description');

const editButton = document.querySelector('.button_type_edit'); //Профиль
const addButton = document.querySelector('.button_type_add'); //Карточка

 //Профиль
function handleFormEditSubmit (evt) {
  evt.preventDefault();
  infoProfile.textContent = infoInputEdit.value; //Запись в Профиль введенных значений из формы
  descriptionProfile.textContent = descriptionInputEdit.value; //Запись в Профиль введенных значений из формы
  popupElementEdit.closePopup();
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
  document.querySelector(cardContainer).prepend(createNewElement);
  cleanInput();
  popupElementAdd.closePopup();
}

const popupElementEdit = new Popup('.popup_type_edit');
popupElementEdit.setEventListeners();

editButton.addEventListener('click', () => {
  formValidators.formEdit.resetValidation();

  popupElementEdit.openPopup();

  infoInputEdit.value = infoProfile.textContent;
  descriptionInputEdit.value = descriptionProfile.textContent;
});

const popupElementAdd = new Popup('.popup_type_add');
popupElementAdd.setEventListeners();

addButton.addEventListener('click', () => {
  formValidators.formAdd.resetValidation();

  popupElementAdd.openPopup();

  cleanInput();

});



const popupElementImage = new PopupWithImage('.popup_type_image');
popupElementImage.setEventListeners()

formElementEdit.addEventListener('submit', handleFormEditSubmit);

formElementAdd.addEventListener('submit', handleFormAddSubmit);
