import { Card } from '../components/Card.js';
import {
  validateData, cardTemplate, cardContainer, infoInputEdit,
  descriptionInputEdit, editButton, addButton, avatarButton
} from '../utils/constants.js';
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

let currentUserId = null;

Promise.all([api.getInitialUser(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    //установка данных пользователя
    profileInfo.setUserInfo({ name: userData.name, about: userData.about });
    profileInfo.setUserAvatar({ avatar: userData.avatar });
    currentUserId = userData._id;
    //отрисовка карточек
    cardElement.addItems(initialCards)
  })
  .catch(err => {
    console.log(err)
  });

const handleCardClick = (name, link) => { popupElementImage.openPopup({ name, link }) };

const handleDeleteCardClick = (cardId, currentCard) => {
  popupElementDelete.setSubmitCallback(() => {
    popupElementDelete.renderLoading()
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
      currentCard.updateLikes(res);
    })
    .catch(err => console.log(err));
}

const handleDislikeCardClick = (cardId, currentCard) => {
  api.getRemoveLike(cardId)
    .then((res) => {
      currentCard.updateLikes(res);
    })
    .catch(err => console.log(err));
}

const popupElementDelete = new PopupWithForm('.popup_type_delete', { handleFormSubmit: () => { } });
popupElementDelete.setEventListeners();

const popupElementImage = new PopupWithImage('.popup_type_image');
popupElementImage.setEventListeners();

//Профиль
const popupElementEdit = new PopupWithForm('.popup_type_edit',
  {
    handleFormSubmit: ({ name, about }) => {
      popupElementEdit.renderLoading('Сохранение...')
      api.getChangeUserInfo({ name, about })
        .then((res) => {
          profileInfo.setUserInfo({ name: res.name, about: res.about })
        })
        .then(() => popupElementEdit.closePopup())
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
      .then(() => popupElementAvatar.closePopup())
      .catch(err => console.log(err))
      .finally(() => popupElementAvatar.renderLoading('Сохранить'));
  }
});
popupElementAvatar.setEventListeners();

//Функция создания карточки
function createCard(item) {
  const card = new Card(item, cardTemplate, currentUserId, handleCardClick,
    handleDeleteCardClick, handleLikeCardClick, handleDislikeCardClick);
  const cardElement = card.render();
  return cardElement
}

const cardElement = new Section({
  renderer: (cardItem) => {
    cardElement.addItem(createCard(cardItem));
  },
}, cardContainer
)

//Карточка
const popupElementAdd = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (cardItem) => {
    popupElementAdd.renderLoading('Сохранение...')
    api.getNewCard(cardItem)
      .then((res) => {
        const newCardItem = createCard({ name: res.name, link: res.link, likes: res.likes, _id: res._id, owner: res.owner })
        cardElement.addItem(newCardItem);
      })
      .then(() => popupElementAdd.closePopup())
      .catch(err => console.log(err))
      .finally(() => popupElementAdd.renderLoading('Сохранить'));
  }
});
popupElementAdd.setEventListeners();

const formValidators = {} // создать экземпляры валидаторов всех форм
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name') // получаем данные из атрибута `name` у формы
    formValidators[formName] = validator; //в объект записываем под именем формы
    validator.enableValidation();
  });
};
enableValidation(validateData);

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

