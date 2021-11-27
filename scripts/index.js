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

const elements = document.querySelector('.elements');
const template = document.querySelector('.template');

const createElementDomeNode = (item) => {
  const elementTemplate = template.content.querySelector(".element").cloneNode(true);
  elementTemplate.querySelector('.element__name').textContent = item.name;
  elementTemplate.querySelector('.element__photo').src = item.link;

  const deleteButton = elementTemplate.querySelector('.button_type_delete');
  deleteButton.addEventListener('click', () => {
    elementTemplate.remove()
  });

  LikeButton = elementTemplate.querySelector('.button_type_heart-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('button_type_heart-like-active');
  });

  return elementTemplate;
}

const result = initialCards.map((item) => {
  return createElementDomeNode(item);
});

elements.append(...result);


// Находим форму в DOM
let formElementEdit = document.querySelector('.popup__input-form_type_edit'); //Профиль
let formElementAdd = document.querySelector('.popup__input-form_type_add'); //Карточка
// Находим поля формы в formElement
let infoInputEdit = formElementEdit.querySelector('.popup__input-text_type_name'); //Профиль
let descriptionInputEdit = formElementEdit.querySelector('.popup__input-text_type_description'); //Профиль
let infoInputAdd = formElementAdd.querySelector('.popup__input-text_type_name'); //Карточка
let descriptionInputAdd = formElementAdd.querySelector('.popup__input-text_type_link'); //Карточка
// Находим поля профиля в DOM
let infoProfile = document.querySelector('.profile__info');
let descriptionProfile = document.querySelector('.profile__description');

const popupElementEdit = document.querySelector('.popup_type_edit'); //Профиль

const popupElementAdd = document.querySelector('.popup_type_add'); //Карточка

const closeButtonEdit = document.querySelector('.popup__close-button_type_edit'); //Профиль

const closeButtonAdd = document.querySelector('.popup__close-button_type_add'); //Карточка

const editButton = document.querySelector('.button_type_edit'); //Профиль

const addButton = document.querySelector('.button_type_add'); //Карточка

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

 //Профиль
function formEditSubmitHandler (evt) {
  evt.preventDefault();
  infoProfile.textContent = infoInputEdit.value; //Запись в Профиль введенных значений из формы
  descriptionProfile.textContent = descriptionInputEdit.value; //Запись в Профиль введенных значений из формы
  closePopup(popupElementEdit);
}
 //Карточка
const formAddSubmitHandler = (evt) => {
  evt.preventDefault();

  const nameInputElement = infoInputAdd.value;
  const linkInputElement = descriptionInputAdd.value;

  const createNewElement = createElementDomeNode({ name: nameInputElement, link: linkInputElement });

  elements.prepend(createNewElement);

  infoInputAdd.value = '';
  descriptionInputAdd.value = '';

  closePopup(popupElementAdd);
}

editButton.addEventListener('click', () => {
  openPopup(popupElementEdit);
  infoInputEdit.value = infoProfile.textContent; //Запись в форму значений из профиля
  descriptionInputEdit.value = descriptionProfile.textContent; //Запись в форму значений из профиля
});

addButton.addEventListener('click', () => {
  openPopup(popupElementAdd);
});

closeButtonEdit.addEventListener('click', () => {
  closePopup(popupElementEdit);
});

closeButtonAdd.addEventListener('click', () => {
  closePopup(popupElementAdd);
});

formElementEdit.addEventListener('submit', formEditSubmitHandler);

formElementAdd.addEventListener('submit', formAddSubmitHandler);


