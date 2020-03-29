//import Card from './Card.js';
//  import * as api from './api.js'; 

export default class CardList {
	constructor(container, card, api, popup) {
		//super();

		this.container = container;
		this.card = card;
		this.api = api;
		this.popup = popup;
		
	}
	addList (name,link) {
		const card = this.card.create(name, link);
		const container = document.querySelector(".places-list");
		console.log(this.container);
		console.log(card);
		container.insertAdjacentHTML('beforeend', card);

	}
	render() {
		this.api.loadCards()
		.then(cards => {
		cards.forEach(item => {
			const { name, link } = item;
		 	this.addList(name, link);
			
		// cards.forEach(item => {
		// 	const { name, link } = item;
		// 	this.addList(name, link);
		// });
	}
		)})};
  
  get(name, link) {
	this.api.postCards({
		name: name,
		link: link
	})
	.then(post => {

		const { name, link } = post;
		this.addList(name, link);
		this.popup.reset();
	})
	.catch(err => {
		console.log('Ошибка отправки на сервер текста', err);
	});
}


}


