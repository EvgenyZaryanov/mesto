export class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name ? data.name:"";
    this._userInfo.textContent = data.info ? data.info:"";
  }

  // setUserInfo(name, info) {
  //   if (name) {
  //     this._userName.textContent = name;
  //   }
  //   if (info) {
  //     this._userData.textContent = info;
  //   }
  // }
}
