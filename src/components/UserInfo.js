export default class UserInfo {
  constructor(profileName, profileDetails) {
    this._name = profileName;
    this._about = profileDetails;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent
    };
    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
  }
}
