(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){var r=this,o=e.data,i=e.handleClickCard,u=e.handleClickLike,a=e.handleRemoveButtonClick,c=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._isLiked=!1,o.likes.forEach((function(t){t._id===c&&(r._isLiked=!0)})),this._likes=o.likes.length,this._arrayLikes=o.likes,this.id=o._id,this._title=o.name,this._link=o.link,this._owner=o.owner._id===c,this._handleClickCard=i,this._handleClickLike=u,this._handleRemoveButtonClick=a,this._cardSelector=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var t=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0);return this._owner||t.querySelector(".element__delete-button").classList.remove("element__delete-button_active"),t}},{key:"_likeCard",value:function(t){t.target.classList.toggle("element__like-button_active"),this._handleClickLike()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"setLikes",value:function(t){this._likes=t,this._usersLikesElement.textContent=this._likes}},{key:"changeStatus",value:function(){this._isLiked=!this._isLiked}},{key:"_setEventListeners",value:function(){var t=this;this._likesElement.addEventListener("click",(function(e){t._likeCard(e)})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){t._handleRemoveButtonClick(t)})),this._cardImage.addEventListener("click",(function(){t._handleClickCard()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._usersLikesElement=this._element.querySelector(".element__likes-counter"),this._usersLikesElement.textContent=this._likes,this._likesElement=this._element.querySelector(".element__like-button"),this._isLiked&&this._likesElement.classList.add("element__like-button_active"),this._element.querySelector(".element__place-name").textContent=this._title,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function i(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var u=function(){function t(e,n){var r,o,u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,u=function(t,e,n){t.classList.remove(n);var r=t.nextElementSibling;r.textContent="",r.classList.remove(e)},(o=i(o="_hideInputError"))in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,this._formSelectors=e,this._formElement=n,this._formList=Array.from(this._formElement.querySelectorAll(this._formSelectors.inputSelector)),this._errorMessage=this._formElement.querySelector(this._formSelectors.inputErrorClass),this._submitButton=this._formElement.querySelector(this._formSelectors.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){return t.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._formList.forEach((function(e){t._inputElement=e,t._errorElement=t._form.querySelector(".".concat(e.id,"-error")),t._hideInputError()}))}},{key:"disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled","true"),this._submitButton.classList.add(this._formSelectors.inactiveButtonClass)}},{key:"_showInputError",value:function(t,e){t.classList.add(this._formSelectors.inputErrorClass);var n=t.nextElementSibling;n.textContent=t.validationMessage,n.classList.add(e)}},{key:"_checkInputValidity",value:function(t,e,n){t.validity.valid?this._hideInputError(t,e,n):this._showInputError(t,e,n)}},{key:"_setEventListeners",value:function(){var t=this;this._formList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._formList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._formSelectors.inactiveButtonClass),this._submitButton.setAttribute("disabled","true")):(this._submitButton.classList.remove(this._formSelectors.inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"appendItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-button")&&t.close()}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(r);if(o){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__fullImage"),e._popupName=e._popup.querySelector(".popup__fullImageTitle"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._popupImage.src=n,this._popupImage.alt=e,this._popupName.textContent=e,h(v(u.prototype),"open",this).call(this)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._handleFormSubmit=e,n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonPopup=n._form.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;S(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._handleFormSubmit(e,t._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),S(w(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(t){this._buttonPopup.innerText=t?"Сохранение...":"Сохранить"}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._button=n._popup.querySelector(".popup__submit-button"),n._handleButtonClick=e,n}return e=u,(n=[{key:"open",value:function(t){this._card=t,j(C(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;j(C(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(e){t._handleButtonClick(e,t._card)}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var T=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e),this._profileStatus=document.querySelector(n),this._profileAvatar=document.querySelector(r),this._profileId=""}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileStatus.textContent,avatar:this._profileAvatar.src,id:this._profileId}}},{key:"setUserInfo",value:function(t,e,n){void 0!==t&&(this._profileName.textContent=t),void 0!==e&&(this._profileStatus.textContent=e),void 0!==n&&(this._profileId=n)}},{key:"setUserAvatar",value:function(t){void 0!==t&&(this._profileAvatar.style.backgroundImage="url('".concat(t,"')"))}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var A=function(){function t(e){var n=e.address,r=e.token,o=e.groupId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=r,this._groupId=o}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"_get",value:function(t){return fetch(t,{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"_patch",value:function(t,e){return fetch(t,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"_post",value:function(t,e){return fetch(t,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"_put",value:function(t){return fetch(t,{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"_delete",value:function(t){return fetch(t,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getCards",value:function(){var t="".concat(this._address).concat(this._groupId,"/cards");return this._get(t)}},{key:"getUserInfo",value:function(){var t="".concat(this._address).concat(this._groupId,"/users/me");return this._get(t)}},{key:"setProfile",value:function(t,e){var n="".concat(this._address).concat(this._groupId,"/users/me"),r=JSON.stringify({name:t,about:e});return this._patch(n,r)}},{key:"setAvatar",value:function(t){var e="".concat(this._address).concat(this._groupId,"/users/me/avatar"),n=JSON.stringify({avatar:t});return this._patch(e,n)}},{key:"postCard",value:function(t,e){var n="".concat(this._address).concat(this._groupId,"/cards"),r=JSON.stringify({name:t,link:e});return this._post(n,r)}},{key:"showLike",value:function(t){var e="".concat(this._address).concat(this._groupId,"/cards/").concat(t);return this._get(e).then((function(t){console.log(t)}))}},{key:"setLike",value:function(t){var e="".concat(this._address).concat(this._groupId,"/cards/likes/").concat(t);return this._put(e)}},{key:"delLike",value:function(t){var e="".concat(this._address).concat(this._groupId,"/cards/likes/").concat(t);return this._delete(e)}},{key:"delCard",value:function(t){var e="".concat(this._address).concat(this._groupId,"/cards/").concat(t);return this._delete(e)}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=document.querySelector(".profile__avatar"),N=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__add-button"),V=document.querySelector("#profilePopup"),z=document.querySelector("#addNewCardPopup"),J=document.querySelector(".popup_avatar"),F=(document.querySelector("#fullImagePopup"),document.querySelector(".element__delete-button"),document.querySelector("#profileName-input")),M=document.querySelector("#profileDetails-input"),H=(document.querySelector(".elements"),document.querySelector(".profile__name"),document.querySelector(".profile__details"),document.querySelector(".popup-add"),document.querySelector(".popup-edit"),document.querySelector("#profile__avatar-button"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:".popup__input-error",errorClass:".popup__input-error"}),G=new E("#profilePopup",(function(t,e){t.preventDefault(),G.renderLoading(!0),ot.setProfile(e.profileName,e.profileDetails).then((function(t){$.setUserInfo(t.name,t.about),G.close()})).catch((function(t){console.log(t)})).finally((function(){G.renderLoading(!1)}))}));function K(t){var e=$.getUserInfo().id,r=new n({data:t,userId:e,handleRemoveButtonClick:function(t){W.open(t)},handleClickCard:function(){Z.open({name:t.name,link:t.link})},handleClickLike:function(){r._isLiked?ot.delLike(r.id).then((function(t){r.setLikes(t.likes.length),r.changeStatus()})).catch((function(t){console.log(t)})):ot.setLike(r.id).then((function(t){r.setLikes(t.likes.length),r.changeStatus()})).catch((function(t){console.log(t)}))}},"#element-template");return r.generateCard()}var Q=new E(".popup_avatar",(function(t,e){t.preventDefault(),Q.renderLoading(!0),ot.setAvatar(e.inputAvatar).then((function(t){$.setUserAvatar(t.avatar),Q.close()})).catch((function(t){console.log(t)})).finally((function(){Q.renderLoading(!1)}))}));Q.setEventListeners();var W=new I(".popup_delete-card",(function(t,e){t.preventDefault(),ot.delCard(e.id).then((function(){e.deleteCard(),W.close()})).catch((function(t){console.log(t)}))}));W.setEventListeners();var X=new l({renderer:function(t){X.appendItem(K(t))}},".elements");G.setEventListeners();var Y=new E(".popup-add",(function(t,e){t.preventDefault(),Y.renderLoading(!0),ot.postCard(e["item-name"],e["item-link"]).then((function(t){X.prependItem(K(t)),Y.close()})).catch((function(t){console.log(t)})).finally((function(){Y.renderLoading(!1)}))}));Y.setEventListeners();var Z=new _("#fullImagePopup");Z.setEventListeners();var $=new T(".profile__name",".profile__details",".profile__avatar"),tt=new u(H,V);tt.enableValidation(),tt.disableSubmitButton();var et=new u(H,z);et.enableValidation(),et.disableSubmitButton();var nt=new u(H,J);nt.enableValidation(),nt.disableSubmitButton(),D.addEventListener("click",(function(){nt.disableSubmitButton(),Q.open()})),N.addEventListener("click",(function(){var t=$.getUserInfo();F.value=t.name,M.value=t.about,G.open()})),U.addEventListener("click",(function(){et.disableSubmitButton(),Y.open()}));var rt,ot=new A({address:"https://mesto.nomoreparties.co/v1/",token:"2386186e-8350-4225-ade5-72f6caee8811",groupId:"cohort-72"});ot.getUserInfo().then((function(t){rt=t._id,$.setUserInfo(t.name,t.about,rt),$.setUserAvatar(t.avatar)})).then((function(){ot.getCards().then((function(t){X.renderItems(t,rt)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))})();