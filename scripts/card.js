import { array } from './popupElementImage';


export class Card {
  constructor(items, template) {
    this._name = items.name;
    this._link = items.link;
    this._alt = items.name;
    this._template = template;
  }

  _createView() {
    this._view = this._template.querySelector('.element').cloneNode(true);
  }

  _deleteButton = () => {
    this._view.remove();
  };

  _likeButton(evt) {
    evt.target.classList.toggle('button_type_heart-like-active');
  };

  _openPopups = () => {



    console.log(array); // [1, 2, 3]

    // debugger;
  };

  _addEventListeners () {
    this._view.querySelector('.button_type_heart-like').addEventListener('click', (evt) => {
      this._likeButton(evt)
    });

    this._view.querySelector('.button_type_delete').addEventListener('click', this._deleteButton);

    this._view.querySelector('.element__photo').addEventListener('click', this._openPopups);
  };

  render(container) {
    this._createView();
    this._view.querySelector('.element__name').textContent = this._name;
    this._view.querySelector('.element__photo').src = this._link;
    this._view.querySelector('.element__photo').alt = this._alt + ". Изображение загружается либо недоступно";
    this._addEventListeners();
    container.prepend(this._view);
  };

}
