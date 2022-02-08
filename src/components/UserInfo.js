export class UserInfo {
  constructor({ infoSelector, descriptionSelector, avatarSelector }) {
    this._profileInfo = infoSelector;
    this._profileDescription = descriptionSelector;
    this._avatarSelector = avatarSelector;
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
    this._avatarSelector.src = avatar;
  };
}
