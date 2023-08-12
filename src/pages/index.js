import './index.css';

//----запутался, не могу понять как изменить поля попапов на нейтральные при открытии попапа...

import { Card } from '..//components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

import {
  token,
  buttonOpenProfileAvatar,
  popupAvatar,
  buttonOpenPopupProfile,
  buttonOpenPopupAddNewCard,
  popupFormProfile,
  inputNameFormProfile,
  inputDetailsFormProfile,
  formAddNewCard,
  formSelectors
} from '../utils/constants.js';

function openPopupProfile() {
  const userData = userInfo.getUserInfo();
  inputNameFormProfile.value = userData.name;
  inputDetailsFormProfile.value = userData.about;
  popupEditProfile.open();
}

function openPopupAddCard() {
  formAddNewCardValid.disableSubmitButton();
  popupAddCard.open();
}

function openPopupAvatar() {
  popupAvatarValid.disableSubmitButton();
  popupEditAvatar.open();
}

const popupEditProfile = new PopupWithForm('#profilePopup', (evt, fields) => {
  evt.preventDefault();
  popupEditProfile.renderLoading(true);
  api
    .setProfile(fields['profileName'], fields['profileDetails'])
    .then(result => {
      userInfo.setUserInfo(result.name, result.about);
      popupEditProfile.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
});

function createCard(cardItem) {
  const myId = userInfo.getUserInfo().id;
  const card = new Card(
    {
      data: cardItem,
      userId: myId,
      handleRemoveButtonClick: card => {
        PopupWithConfirm.open(card);
      },
      handleClickCard: () => {
        popupFullImage.open({ name: cardItem.name, link: cardItem.link });
      },
      handleClickLike: () => {
        if (!card._isLiked) {
          api
            .setLike(card.id)
            .then(res => {
              card.setLikes(res.likes.length);
              card.changeStatus();
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          api
            .delLike(card.id)
            .then(res => {
              card.setLikes(res.likes.length);
              card.changeStatus();
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },
    '#element-template'
  );

  return card.generateCard();
}

const popupEditAvatar = new PopupWithForm('.popup_avatar', (evt, fields) => {
  evt.preventDefault();
  popupEditAvatar.renderLoading(true);
  api
    .setAvatar(fields['inputAvatar'])
    .then(result => {
      userInfo.setUserAvatar(result.avatar);
      popupEditAvatar.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false);
    });
});
popupEditAvatar.setEventListeners();

const PopupWithConfirm = new PopupDeleteCard('.popup_delete-card', (evt, card) => {
  evt.preventDefault();
  api
    .delCard(card.id)
    .then(() => {
      card.deleteCard();
      PopupWithConfirm.close();
    })
    .catch(err => {
      console.log(err);
    });
});
PopupWithConfirm.setEventListeners();

const cardList = new Section(
  {
    renderer: data => {
      cardList.appendItem(createCard(data));
    }
  },
  '.elements'
);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup-add', (evt, fields) => {
  evt.preventDefault();
  popupAddCard.renderLoading(true);
  api
    .postCard(fields['item-name'], fields['item-link'])
    .then(res => {
      cardList.prependItem(createCard(res));
      popupAddCard.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.renderLoading(false);
    });
});
popupAddCard.setEventListeners();

const popupFullImage = new PopupWithImage('#fullImagePopup');
popupFullImage.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__details', '.profile__avatar');

//-----------------Валидация----------------------//

const formProfileValid = new FormValidator(formSelectors, popupFormProfile);
formProfileValid.enableValidation();
formProfileValid.disableSubmitButton();
const formAddNewCardValid = new FormValidator(formSelectors, formAddNewCard);
formAddNewCardValid.enableValidation();
formAddNewCardValid.disableSubmitButton();
const popupAvatarValid = new FormValidator(formSelectors, popupAvatar);
popupAvatarValid.enableValidation();
popupAvatarValid.disableSubmitButton();

buttonOpenProfileAvatar.addEventListener('click', openPopupAvatar);
buttonOpenPopupProfile.addEventListener('click', openPopupProfile);
buttonOpenPopupAddNewCard.addEventListener('click', openPopupAddCard);

//--------------------------------Данные API-----------------------------//

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/',
  token: token,
  groupId: 'cohort-72'
});

let userId;

api
  .getUserInfo()
  .then(resApi => {
    userId = resApi._id;
    userInfo.setUserInfo(resApi.name, resApi.about, userId);
    userInfo.setUserAvatar(resApi.avatar);
  })
  .then(() => {
    api
      .getCards()
      .then(res => {
        cardList.renderItems(res, userId);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });
