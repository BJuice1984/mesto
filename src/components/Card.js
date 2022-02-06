export class Card {
  constructor(items, template, curretUserId, handleCardClick, handleDeleteCardClick) {
    this._name = items.name;
    this._link = items.link;
    this._alt = items.name;
    this._likes = items.likes.length;
    this._cardId = items._id;
    this._ownerId = items.owner._id;
    this._template = template;
    this._curretUserId = curretUserId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  }

  _createView() {
    this._view = this._template.querySelector('.element').cloneNode(true);
    this._cardImage = this._view.querySelector('.element__photo');
    this._likesCounter = this._view.querySelector('.element__counter');
    this._removeButton = this._view.querySelector('.button_type_delete');
    if (this._curretUserId === this._ownerId) {
      this._removeButton.classList.remove('button_type_delete-disactive');
    }
  }

  _likeButton(evt) {
    evt.target.classList.toggle('button_type_heart-like-active');
  };

  _setEventListeners () {
    this._view.querySelector('.button_type_heart-like').addEventListener('click', (evt) => {this._likeButton(evt)});
    this._removeButton.addEventListener('click', () => {this._handleDeleteCardClick(this._cardId, this._view)});
    this._cardImage.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});
  };

  render() {
    this._createView();
    this._view.querySelector('.element__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt + ". Изображение загружается либо недоступно";
    this._likesCounter.textContent = this._likes;
    this._setEventListeners();
    return this._view
  };

}
