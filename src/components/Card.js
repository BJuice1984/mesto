export class Card {
  constructor(items, template, currentUserId, handleCardClick,
    handleDeleteCardClick, handleLikeCardClick, handleDislikeCardClick) {
    this._name = items.name;
    this._link = items.link;
    this._alt = items.name;
    this._likes = items.likes;
    this._cardId = items._id;
    this._ownerId = items.owner._id;
    this._template = template;
    this._currentUserId = currentUserId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeCardClick = handleLikeCardClick;
    this._handleDislikeCardClick = handleDislikeCardClick;
  }

  updateLikes(array) {
    this._likesCounter.textContent = array.likes.length;
    this._activeLike.classList.toggle('button_type_heart-like-active');
  }

  _checkLikeCurrentUser() {
    this._likes.forEach((like) => {
      if (like._id === this._currentUserId) {
        this._activeLike.classList.add('button_type_heart-like-active')
      }
    })
  }

  _createView() {
    this._view = this._template.querySelector('.element').cloneNode(true);
    this._cardImage = this._view.querySelector('.element__photo');
    this._likesCounter = this._view.querySelector('.element__counter');
    this._removeButton = this._view.querySelector('.button_type_delete');
    this._activeLike = this._view.querySelector('.button_type_heart-like');
    if (this._currentUserId === this._ownerId) {
      this._removeButton.classList.remove('button_type_delete-disactive');
    }
  }

  _setEventListeners() {
    this._activeLike.addEventListener('click', () => {

      if (this._activeLike.classList.contains('button_type_heart-like-active')) {
        this._handleDislikeCardClick(this._cardId, this)
      } else {
        this._handleLikeCardClick(this._cardId, this)
      }
    });

    this._removeButton.addEventListener('click', () => { this._handleDeleteCardClick(this._cardId, this._view) });
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
  };

  render() {
    this._createView();
    this._view.querySelector('.element__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt + ". ?????????????????????? ?????????????????????? ???????? ????????????????????";
    this._likesCounter.textContent = this._likes.length
    this._setEventListeners();
    this._checkLikeCurrentUser();
    return this._view
  };

}
