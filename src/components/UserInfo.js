export class UserInfo {
  constructor({ infoSelector, descriptionSelector, avatarSelector }) {
    this._profileInfo = document.querySelector(infoSelector);
    this._profileDescription = document.querySelector(descriptionSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  };

  getUserInfo() {
    const userInfo = {
      info: this._profileInfo.textContent,
      description: this._profileDescription.textContent,
    }
    return userInfo
  };

  setUserInfo({ name, about }) {
    this._profileInfo.textContent = name;
    this._profileDescription.textContent = about;
  };

  setUserAvatar({ avatar }) {
    this._profileAvatar.src = avatar;
  };
}
