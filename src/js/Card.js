export default class Card {
	constructor (argument) { //argument
		this.$like = argument.isLiked; //argument.isLiked;
		this.$container = argument.container; // argument.container;
	}


	create(name,link) {
		return `
			<div class="place-card">
			<div class="place-card__image" style="background-image: url(${link});">                           
				<button class="place-card__delete-icon"></button>
			</div>
			<div class="place-card__description">
				<h3 class="place-card__name">${name}</h3>
				<button class="place-card__like-icon"></button>
			</div>
		</div>
			  `;
	} 


	//Лайк 
	like() {
		event.target.classList.toggle(this.$like);
	}

	//Удаление карточки
	remove() {
		cardList.container.removeChild(event.target.closest('.place-card')); 
	}

	
} 

