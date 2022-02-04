export class UserInfo {
  constructor({infoSelector, descriptionSelector}) {
    this._profileInfo = document.querySelector(infoSelector);
    this._profileDescription = document.querySelector(descriptionSelector);
  };

  getUserInfo() {
    const userInfo = {
      info: this._profileInfo.textContent,
      description: this._profileDescription.textContent
    }
    return userInfo
  };

  setUserInfo(info, description) {
    this._profileInfo.textContent = info;
    this._profileDescription.textContent = description;
  };
}
