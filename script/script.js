const openPopupButton = document.querySelector('#open-popup-button');
const closePopupButton = document.querySelector('#close-popup-button');
const editPopup = document.querySelector('#edit-popup');
const profileName = document.querySelector('.profile__name');
const profileDetails = document.querySelector('.profile__details');
const nameInput = document.querySelector('#name-input');
const detailsInput = document.querySelector('#details-input');
const editForm = document.querySelector('#edit-form');

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
