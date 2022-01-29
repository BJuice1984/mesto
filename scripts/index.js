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
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { Section } from './Section.js';
import { UserInfo } from './UserInfo.js';

// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
// Находим поля формы в formElement
const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль

const profileInfo = new UserInfo({ infoSelector: '.profile__info', descriptionSelector: '.profile__description' });

const cardTemplate = document.querySelector('.template').content;
const cardContainer = '.elements';

const handleCardClick = (name, link) => {popupElementImage.openPopup({name, link})};

const popupElementImage = new PopupWithImage('.popup_type_image');
popupElementImage.setEventListeners();

//Профиль
const popupElementEdit = new PopupWithForm('.popup_type_edit',
{ handleFormSubmit: ({ info, description }) => {
  profileInfo.setUserInfo({ info, description })
}
});
popupElementEdit.setEventListeners();

//Карточка
const popupElementAdd = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (data) => {
    // console.log(data)
    // const addPopupInput = {
      //   name: data.name,
      //   link: data.link
      // }
      // console.log(addPopupInput)
      const card = new Card(data, cardTemplate, handleCardClick);
      const cardElement = card.render();
      cardList.addItem(cardElement);
    }
  });
popupElementAdd.setEventListeners();

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

const editButton = document.querySelector('.button_type_edit'); //Профиль
const addButton = document.querySelector('.button_type_add'); //Карточка

editButton.addEventListener('click', () => {
  popupElementEdit.openPopup();
  const getUserInfo = profileInfo.getUserInfo()
  infoInputEdit.value = getUserInfo.info;
  descriptionInputEdit.value = getUserInfo.description;
  formValidators.formEdit.resetValidation();
});

addButton.addEventListener('click', () => {
  formValidators.formAdd.resetValidation();
  popupElementAdd.openPopup();
});




// const formElementAdd = document.querySelector('.popup__input-form_type_add'); //Карточка


// const infoInputAdd = formElementAdd.querySelector('.popup__input-text_type_name'); //Карточка
// const descriptionInputAdd = formElementAdd.querySelector('.popup__input-text_type_link'); //Карточка
// Находим поля профиля в DOM



//Профиль
// function handleFormEditSubmit (evt) {
  //   evt.preventDefault();
  //   infoProfile.textContent = infoInputEdit.value; //Запись в Профиль введенных значений из формы
  //   descriptionProfile.textContent = descriptionInputEdit.value; //Запись в Профиль введенных значений из формы
  //   popupElementEdit.closePopup();
  // }

  // function cleanInput() {
    //   infoInputAdd.value = '';
    //   descriptionInputAdd.value = '';
    // };

    //Карточка
    // const handleFormAddSubmit = (evt) => {
      //   evt.preventDefault();
      //   const nameInputElement = infoInputAdd.value;
      //   const linkInputElement = descriptionInputAdd.value;
      //   const createNewElement = createCard({ name: nameInputElement, link: linkInputElement });
      //   document.querySelector(cardContainer).prepend(createNewElement);
      //   cleanInput();
      //   popupElementAdd.closePopup();
      // }





      // const infoProfile = document.querySelector('.profile__info');
      // const descriptionProfile = document.querySelector('.profile__description');




      // formElementEdit.addEventListener('submit', handleFormEditSubmit);

      // formElementAdd.addEventListener('submit', handleFormAddSubmit);


      // initialCards.forEach((items) => {
        //   const newElements = createCard(items);
        //   cardContainer.prepend(newElements);
        // });

        // const addFormValidator = new FormValidator(validateData, formElementAdd);
        // addFormValidator.enableValidation();
        // const editFormValidator = new FormValidator(validateData, formElementEdit);
        // editFormValidator.enableValidation();
