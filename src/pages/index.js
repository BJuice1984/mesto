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
const profileInfo = new UserInfo({
  infoSelector: '.profile__info',
  descriptionSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
});

let curretUserId = null;

api.getInitialUser()
  .then((res) => {
    // console.log(res)
    profileInfo.setUserInfo({ name: res.name, about: res.about });
    profileInfo.setUserAvatar({ avatar: res.avatar });
    curretUserId = res._id;
  })
  .catch(err => console.log(err));

// Находим форму в DOM
const formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
// Находим поля формы в formElement
const infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
const descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль

const cardTemplate = document.querySelector('.template').content;
const cardContainer = '.elements';

const handleCardClick = (name, link) => {popupElementImage.openPopup({name, link})};

const handleDeleteCardClick = (cardId, currentCard) => {
  popupElementDelete.setSubmitCallback(() => {
    popupElementDelete.renderLoading('Удаление...')
    api.getDeleteCard(cardId)
      .then(() => {
        currentCard.remove();
        popupElementDelete.closePopup()
      })
      .catch(err => console.log(err))
      .finally(() => popupElementDelete.renderLoading('Да'));
    });
    popupElementDelete.openPopup();
  }

const handleLikeCardClick = (cardId, currentCard) => {
  api.getAddLike(cardId)
    .then((res) => {
      currentCard.querySelector('.element__counter').textContent = res.likes.length})
    .catch(err => console.log(err));
}

const handleDislikeCardClick = (cardId, currentCard) => {
  api.getRemoveLike(cardId)
    .then((res) => {
      currentCard.querySelector('.element__counter').textContent = res.likes.length})
    .catch(err => console.log(err));
}

const popupElementDelete = new PopupWithForm('.popup_type_delete', {handleFormSubmit: () => {}});
popupElementDelete.setEventListeners();

const popupElementImage = new PopupWithImage('.popup_type_image');
popupElementImage.setEventListeners();

//Профиль
const popupElementEdit = new PopupWithForm('.popup_type_edit',
{ handleFormSubmit: ({ name, about }) => {
  popupElementEdit.renderLoading('Сохранение...')
  api.getChangeUserInfo({ name, about })
  .then((res) => {
  // console.log({ name: res.name, about: res.about })
  profileInfo.setUserInfo({ name: res.name, about: res.about })
  })
  .catch(err => console.log(err))
  .finally(() => popupElementEdit.renderLoading('Сохранить'));
}
});
popupElementEdit.setEventListeners();

//Аватар
const popupElementAvatar = new PopupWithForm('.popup_type_avatar', {
  handleFormSubmit: (values) => {
    popupElementAvatar.renderLoading('Сохранение...')
    api.getChangeAvatar(values)
      .then((res) => {
        profileInfo.setUserAvatar({ avatar: res.avatar })
      })
      .catch(err => console.log(err))
      .finally(() => popupElementAvatar.renderLoading('Сохранить'));
    }
});
popupElementAvatar.setEventListeners();

//Функция создания карточки
function createCard(item) {
  const card = new Card(item, cardTemplate, curretUserId, handleCardClick, handleDeleteCardClick, handleLikeCardClick, handleDislikeCardClick);
  const cardElement = card.render();
  return cardElement
}

//Карточка
const popupElementAdd = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (cardItem) => {
    // console.log(cardItem)
    popupElementAdd.renderLoading('Сохранение...')
    api.getNewCard(cardItem)
      .then((res) => {
    const newCardItem = createCard({ name: res.name, link: res.link, likes: res.likes, _id: res._id, owner: res.owner })
        document.querySelector(cardContainer).prepend(newCardItem)
        })
      .catch(err => console.log(err))
      .finally(() => popupElementAdd.renderLoading('Сохранить'));
  }
});

popupElementAdd.setEventListeners();


//Загрузка массива карточек с сервера
api.getInitialCards()
  .then(initialCards => {
    // console.log(initialCards);
    const cardList = new Section({
      items: initialCards,
      renderer: (cardItem) => {
        cardList.addItem(createCard(cardItem));
        },
      }, cardContainer
    );
cardList.addItems();})
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

