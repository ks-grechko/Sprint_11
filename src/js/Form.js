import Popup from './Popup.js';
//import * as index from '../index.js' 

export class Form extends Popup {
    constructor() {
        super();
    
        this._add = this.add.bind(this);
        this._valid = this.valid.bind(this);
    }
    formData(validation, classContent) {
   
        this.form = document.querySelector(".popup__form");
        this.name = document.querySelector(".popup__input_type_name");
        this.info = document.querySelector(".popup__input_type_info");
        this.submit = document.querySelector(".popup__button");
      
        this.addContent = classContent;
      
        this.validation = validation;
    }

    // Добавляем слушатели
    setAddEventListener() {
        this.form.addEventListener('input',this._valid);
        this.form.addEventListener('submit',this._add);
    }

    // Удаляем слушатели
    removeAddEventListener() {
        this.form.removeEventListener('input', validation.check);
        this.form.removeEventListener('submit',this._add);
    }

    valid() {
        this.validation.check(this.form);
    }

    add() {
        
        event.preventDefault();
        this.addContent.get(this.name.value, this.info.value);
        //this.reset(); //эта строчка была за слешами
    }
    addCards() {
        
        event.preventDefault();
        this.addContent.get(this.name.value, this.info.value);
        this.reset();
    }

    value(name, info) {
        this.name.value = name;
        this.info.value = info;
    }

    reset() {
        this.form.reset();
        this.submit.setAttribute('disabled', true);
        this.removeAddEventListener();
        this.close();
    }
}
