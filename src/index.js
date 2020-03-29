import './style.css';
import Api from './js/api.js';
import Card from './js/Card.js';
import CardList from './js/CardList.js';
import {Form} from './js/Form.js';
import Popup from './js/Popup.js';
import PopupBigImg from './js/popupBigImg.js';
import Profile from './js/Profile.js';
import Validation from './js/Validation.js'; 

const serverUrl = NODE_ENV ==='development'?'http://praktikum.tk/cohort7':'https://praktikum.tk/cohort7';
const loadApi = {
  url: serverUrl,
  headers: {
    authorization: '45008fcf-a69b-43aa-afc0-7b18cdd7b79f',
    'Content-Type': 'application/json'
  }
}

//const root = document.querySelector('.root');
const cardContainer = document.querySelector('.places-list');
//const card1 = document.querySelector('.place-card');

const placeForCards = {
  container: 'places-list'
};
const cardHtml = {
  card: 'place-card', 
  name: 'place-card__name',
  image: 'place-card__image', 
  like: 'place-card__like-icon', 
  isLiked: "place-card__like-icon_liked", 
  remove: "place-card__delete-icon", 
  ...placeForCards
};

const popUpHtml = {
  open: 'popup_is-opened', 
  close: 'popup__close' 
}

const htmlForm = {
  error: {
      container: {
          name: "popup__error_name",
          info: "popup__error_info"
      },
      text: {
          valueMissing: "Это обязательное поле",
          tooShort: "Должно быть от 2 до 30 символов",
          typeMismatch: "Введите URL"
      }
  }
};

const userInfo = {
  name: 'user-info__name',
  about: 'user-info__job',
  avatar: 'user-info__photo'
};

const editProfile = {
  //addContent: new Profile(userInfo),
    form: "formProfile",
    button: "edit__button", 
    popup: "popup_autor", 
    ...popUpHtml,
    ...htmlForm
};

const addPlacePopUp = {
  //addContent: new CardList(placeForCards),
  form: "formCards",
  button: "user-info__button", 
  popup: "popup_add-plase", 
  ...popUpHtml,
  ...htmlForm
};

const bigPhoto = {
  popUp: "popup-img", 
  img: "popup-img__cart", 
  //clo: "popup-img__close",
  ...popUpHtml
};

const api = new Api(loadApi);
const card = new Card(cardHtml);
const popup = new Popup();
const popupBigImg = new PopupBigImg(bigPhoto);
const formEdit = new Form(editProfile);
const formNewPlace = new Form(addPlacePopUp);
const validation = new Validation(htmlForm);
const cardList = new CardList(cardContainer, card, api, formNewPlace); 
const profile = new Profile(userInfo,api,formEdit); //api,formEdit

//Функции

//Лайк

const likeEvent = (event) => {
  if (event.target.classList.contains(cardHtml.like)) {
    card.like();
}
}
//Удаление карточки
const deliteCard = (event) => {
  if (event.target.classList.contains(cardHtml.remove)) {
    card.remove();
}
}
//Открыть фото/закрыть фото
 const openPhoto = (event) => {
  if (event.target.classList.contains(cardHtml.image)) {
    // Открыть фото
    popupBigImg.open();
    popup.open(bigPhoto);
} else if (
    event.target.classList.contains(bigPhoto.close) &&
    event.target.closest(`.${bigPhoto.popUp}`)
) {
    // Закрыть фото
    popup.close();
    popupBigImg.close();
}
 }
// Попап "Редактировать профиль"
const EditPopUp = (event) => {
    if (event.target.classList.contains(editProfile.button)) {
      formEdit.formData(editProfile, validation, profile);
      formEdit.value(
        profile.name.textContent,
        profile.about.textContent
    );
    formEdit.open(editProfile);
      formEdit.validation.check(formEdit.form);
      formEdit.setAddEventListener();
    } else if (
      event.target.classList.contains(editProfile.close) &&
      event.target.closest(`.${editProfile.popUp}`)
    ) {
    formEdit.reset();
    }
    }
  
//Попап «Новое место»
const AddCardPopUp = (event) => {
    if (event.target.classList.contains(".user-info__button")) {
      formNewPlace.formData(addPlacePopUp, validation, cardList);
      
      formNewPlace.open(addPlacePopUp);
      formNewPlace.setAddEventListener();
      
    } else if (
      event.target.classList.contains(addPlacePopUp.close) &&
      event.target.closest(`.${addPlacePopUp.popUp}`)
    ) {
      formNewPlace.reset();
    }
    }


// const loadCards = (event) => {
//     api.loadCards() 
//   .then(cards=> { 

//   const  cardsList = new CardList(placeForCards, card);  
//   cardsList.render(cards) 
//   console.log(cards)  
// })
// //   
// ; }

//cardList.render();

//Слушатели 
window.addEventListener("load", profile.render());
window.addEventListener("load", cardList.render());
 //window.addEventListener("load", loadCards);
window.addEventListener("click", likeEvent);
window.addEventListener("click", deliteCard);
window.addEventListener("click", openPhoto);
window.addEventListener("click", EditPopUp);
document.addEventListener("click", AddCardPopUp);

