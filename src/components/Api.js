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

  getChangeAvatar(link) {
    return fetch('https://nomoreparties.co/v1/cohort-34/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(link)
    })
    .then(res => this._checkResponse(res))
  }

  getChangeUserInfo(data) {
    return fetch('https://nomoreparties.co/v1/cohort-34/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => this._checkResponse(res))
  }


}
