export class Popup {
	
    open(argument) {
        this.popup = document.querySelector(`.${argument.popUp}`);
        this.opened = argument.open;
        this.popup.classList.add(this.opened);
    }

    // Закрыть popup
    close() {
        this.popup.classList.remove(this.opened);
       
    }
}