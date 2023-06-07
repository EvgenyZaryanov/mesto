// Попап 1 //

const openPopupButton = document.querySelector('#open-popup-button');
const closePopupButton = document.querySelector('#close-popup-button');
const editPopup = document.querySelector('#edit-popup');
const profileName = document.querySelector('.profile__name');
const profileDetails = document.querySelector('.profile__details');
const nameInput = document.querySelector('#name-input');
const detailsInput = document.querySelector('#details-input');
const editForm = document.querySelector('#edit-form');
//-------------------------------------------//
const openSecondPopupButton = document.querySelector('#open-second-popup-button');
const closeSecondPopupButton = document.querySelector('#close-second-popup-button');
const popupAdd = document.querySelector('#add-popup');
const formAdd = document.querySelector('#add-form');
const itemNameInput = document.querySelector('#item-name-input');
const itemLinkInput = document.querySelector('#item-link-input');
//-------------------------------------------------//
/** @type {HTMLTemplateElement} */
const template = document.querySelector('#element-template');
const templateContent = template.content;
const cardElement = templateContent.querySelector('.element');
const cardElements = document.querySelector('.elements');
//---------------------------------------------//
const zoomPopupImage = document.querySelector('#popupImage');
const closeThirdPopupButton = document.querySelector('#close-third-popup-button');
const popupImagePic = document.querySelector('.popup__picture');
const popupImagePicTitle = document.querySelector('.popup__picTitle');

openPopupButton.addEventListener('click', function () {
  openPopup(editPopup);
});

closePopupButton.addEventListener('click', function () {
  closePopup(editPopup);
});

editForm.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDetails.textContent = detailsInput.value;
  closePopup(editPopup);
});

function openPopup(popup) {
  nameInput.value = profileName.textContent;
  detailsInput.value = profileDetails.textContent;
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

openSecondPopupButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

closeSecondPopupButton.addEventListener('click', function () {
  closePopup(popupAdd);
});

formAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  closePopup(popupAdd);
});

const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialElements.forEach(function (item) {
  const newElement = createElement(item.name, item.link);
  cardElements.prepend(newElement);
});

function createElement(name, link) {
  const newElement = cardElement.cloneNode(true);

  const cardName = newElement.querySelector('.element__place-name');
  cardName.textContent = name;

  const cardImage = newElement.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = name;

  const cardDelete = newElement.querySelector('.element__delete-button');
  cardDelete.addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  });

  const cardLike = newElement.querySelector('.element__like-button');
  cardLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

  //-----открытие изображения в полном размере------//

  cardImage.addEventListener('click', function () {
    openPopup(zoomPopupImage);
    popupImagePic.src = link;
    popupImagePicTitle.textContent = name;
  });
  closeThirdPopupButton.addEventListener('click', function () {
    closePopup(zoomPopupImage);
  });

  //--------------------------------------------------------//
  return newElement;
}

// -------------------------------------------- //

formAdd.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);

  const name = values['item-name'];
  const link = values['item-link'];

  const newElement = createElement(name, link);
  cardElements.prepend(newElement);

  form.reset();
});
