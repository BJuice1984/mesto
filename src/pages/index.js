import { Card } from '../components/Card.js';
import { validateData } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import '../pages/index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: '8ea9cb00-852a-4345-ada2-88b25612cbe6',
    'Content-Type': 'application/json'
  }
});

// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
// Находим поля формы в formElement
const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль

const profileInfo = new UserInfo({
  infoSelector: '.profile__info',
  descriptionSelector: '.profile__description'
});

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

//Аватар
const popupElementAvatar = new PopupWithForm('.popup_type_avatar',
{ handleFormSubmit: (values) => {
  const { link } = values;
  console.log(link)
}
});
popupElementAvatar.setEventListeners();

function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.render();
  return cardElement
}

//Карточка
const popupElementAdd = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (cardItem) => {
      cardList.addItem(createCard(cardItem));
    }
  });
popupElementAdd.setEventListeners();

//Загрузка массива карточек с сервера
api.getInitialCards()
  .then(initialCards => {
    const cardList = new Section({
      items: initialCards,
      renderer: (cardItem) => {
        cardList.addItem(createCard(cardItem));
        },
      },
      cardContainer
      );
    cardList.addItems();
  })
  .catch(err => console.log(err));

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
const avatarButton = document.querySelector('.profile__avatar'); //Аватар

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

avatarButton.addEventListener('click', () => {
  formValidators.formAvatar.resetValidation();
  popupElementAvatar.openPopup();
});
