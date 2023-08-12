export class UserInfo {
  constructor(profileNameSelector, profileStatusSelector, profileAvatar) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileStatus = document.querySelector(profileStatusSelector);
    this._profileAvatar = document.querySelector(profileAvatar);
    this._profileId = '';
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileStatus.textContent,
      avatar: this._profileAvatar.src,
      id: this._profileId
    };
  }

  setUserInfo(name, about, id) {
    if (name !== undefined) {
      this._profileName.textContent = name;
    }
    if (about !== undefined) {
      this._profileStatus.textContent = about;
    }
    if (id !== undefined) {
      this._profileId = id;
    }
  }

  setUserAvatar(avatar) {
    if (avatar !== undefined) {
      this._profileAvatar.style.backgroundImage = `url('${avatar}')`;
    }
  }
}
