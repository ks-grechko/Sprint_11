

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
		container.insertAdjacentHTML('afterbegin', card);

	}
	render() {
		this.api.loadCards()
		.then(cards => {
		cards.forEach(item => {
			const { name, link } = item;
		 	this.addList(name, link);
			

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


