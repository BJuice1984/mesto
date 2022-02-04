export class Api {
  constructor(options) {
    this._options = options;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка даных: ${res.status}`)
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-34/cards', {
      headers: this._headers
    })
    .then(res => this._checkResponse(res));
  }

  getInitialUser() {
    return fetch('https://nomoreparties.co/v1/cohort-34/users/me', {
      headers: this._headers
    })
    .then(res => this._checkResponse(res))
  }


}
