export class Card {
  constructor(items, template, curretUserId, handleCardClick, handleDeleteCardClick, handleLikeCardClick, handleDislikeCardClick) {
    this._name = items.name;
    this._link = items.link;
    this._alt = items.name;
    this._likes = items.likes;
    this._cardId = items._id;
    this._ownerId = items.owner._id;
    this._template = template;
    this._curretUserId = curretUserId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeCardClick = handleLikeCardClick;
    this._handleDislikeCardClick = handleDislikeCardClick;
  }

  _checkLikeCurrentUser() {
    this._likes.forEach((like) => {
      if (like._id === this._curretUserId)
      {
        this._view.querySelector('.button_type_heart-like').classList.add('button_type_heart-like-active')
      }
    })
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
    this._view
    .querySelector('.button_type_heart-like')
    .addEventListener('click', (evt) => {

if (this._view.querySelector('.button_type_heart-like').classList.contains('button_type_heart-like-active')) {

    {this._likeButton(evt);
    this._handleDislikeCardClick(this._cardId, this._view)}

} else {

  {this._likeButton(evt);
  this._handleLikeCardClick(this._cardId, this._view)}
}
    });

    this._removeButton.addEventListener('click', () => {this._handleDeleteCardClick(this._cardId, this._view)});
    this._cardImage.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});
  };

  render() {
    this._createView();
    this._view.querySelector('.element__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt + ". Изображение загружается либо недоступно";
    this._likesCounter.textContent = this._likes.length
    this._setEventListeners();
    this._checkLikeCurrentUser();
    return this._view
  };

}
