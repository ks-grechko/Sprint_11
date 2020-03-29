export default class Popup {


    // Открываем popup
    open(argument) {
        this.popup = document.querySelector(`.${argument.popup}`); //".popup"
        this.opened = argument.open;
        this.popup.classList.add(this.opened); //".popup_is-opened"
    }

    // Закрыть popup
    close() {
        this.popup.classList.remove(this.opened);
       
    }
}
