import {Popup} from './Popup.js';
export default class PopupBigImg extends Popup {
    constructor(argument) {
        super();
        this.popUp = document.querySelector(`.${argument.popUp}`);
        this.img = this.popUp.querySelector(`.${argument.img}`);
        
    }

    open() {
		this.img.src = event.target.style.backgroundImage.slice(5, -2);
    }

    close() {
        this.img.src = '';
    }
    }





