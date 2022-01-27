// import { handleCardClick } from './handleCardClick.js';

export class Card {
  constructor(items, template) {
    this._name = items.name;
    this._link = items.link;
    this._alt = items.name;
    this._template = template;
  }

  _createView() {
    this._view = this._template.querySelector('.element').cloneNode(true);
    this._cardImage = this._view.querySelector('.element__photo');
  }

  _deleteButton = () => {
    this._view.remove();
  };

  _likeButton(evt) {
    evt.target.classList.toggle('button_type_heart-like-active');
  };

  _openPopupImage = () => {
    handleCardClick(this._name, this._link, this._alt);
  };

  _setEventListeners () {
    this._view.querySelector('.button_type_heart-like').addEventListener('click', (evt) => {
      this._likeButton(evt)
    });

    this._view.querySelector('.button_type_delete').addEventListener('click', this._deleteButton);

    this._cardImage.addEventListener('click', this._openPopupImage);
  };

  render() {
    this._createView();
    this._view.querySelector('.element__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt + ". Изображение загружается либо недоступно";
    this._setEventListeners();
    return this._view
  };

}
