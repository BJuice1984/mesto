export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  };

  addItem(element) {
    this._container.prepend(element)
  };
}
