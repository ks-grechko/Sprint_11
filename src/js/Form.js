import {Popup} from './Popup.js';
import * as index from './Validation.js'

export class Form extends Popup {
    constructor() {
        super();
    
        this._add = this.add.bind(this);
        this._valid = this.valid.bind(this);
    }
    formData(argument, validation, classContent) {
   
        this.form = document.forms[argument.form];
        this.name = this.form.elements.name;
        this.info = this.form.elements.info;
        this.submit = this.form.elements.submit;
      
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
        this.form.removeEventListener('input', index.check);
        this.form.removeEventListener('submit',this._add);
    }

    valid() {
        this.validation.check(this.form);
    }

    add() {
        
        event.preventDefault();
        this.addContent.get(this.name.value, this.info.value);
        //this.reset();
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
