export class UserInfo {
  constructor({ info, description, avatar }) {
    this._profileInfo = document.querySelector(info);
    this._profileDescription = document.querySelector(description);
    this._avatarSelector = document.querySelector(avatar);
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
