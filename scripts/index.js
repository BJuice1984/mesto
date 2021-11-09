const popupElement = document.querySelector('.popup');

const closeButton = document.getElementById('CloseButton');

const editButton = document.getElementById('EditButton');

const saveButton = document.getElementById('SaveButton');

editButton.addEventListener('click', popupOpen);

closeButton.addEventListener('click', popupClose);

saveButton.addEventListener('click', popupSave);

// Находим форму в DOM
let formElement = document.querySelector('.popup__input-form');
// Находим поля формы в DOM
let infoInput = document.querySelector('[name="profile-info"]');
let descriptionInput = document.querySelector('[name="profile-description"]');
// Находим поля профиля в DOM
let infoProfile = document.querySelector('.profile__info');
let descriptionProfile = document.querySelector('.profile__description');

let infoProfileCurrentValue = infoInput.value;
let descriptionProfileCurrentValue = descriptionInput.value;

function popupOpen() {
  popupElement.classList.add('popup__opened');
  infoInput.textContent = infoProfileCurrentValue; //Запись в форму значений из профиля
  descriptionInput.textContent = descriptionProfileCurrentValue; //Запись в форму значений из профиля  
  console.log(infoInput.textContent)
  console.log(descriptionInput.textContent)
}

function popupClose() {
  popupElement.classList.remove('popup__opened');
  infoInput.value = infoProfileCurrentValue;
  descriptionInput.value = descriptionProfileCurrentValue;

  console.log(infoInput.value)
  console.log(descriptionInput.value)
}

function popupSave() {
  infoProfile.textContent = infoInput.value; //Запись в Профиль введенных значений из формы
  descriptionProfile.textContent = descriptionInput.value; //Запись в Профиль введенных значений из формы
  infoProfileCurrentValue = infoInput.value;
  descriptionProfileCurrentValue = descriptionInput.value;
  popupClose()
}

function formSubmitHandler (evt) {
  evt.preventDefault();

}


formElement.addEventListener('submit', formSubmitHandler);

