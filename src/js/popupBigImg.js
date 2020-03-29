
export default class PopupBigImg {
    constructor(argument) {
        this.argument = argument;
        this.img = document.querySelector(`.${argument.img}`);
        // this.popUp = root.querySelector(`.${argument.popUp}`);
        // this.img = this.popUp.querySelector(`.${argument.img}`);
        
    }

    open() {
		this.img.src = event.target.style.backgroundImage.slice(5, -2);
    }

    close() {
        this.img.src = '';
    }
}




