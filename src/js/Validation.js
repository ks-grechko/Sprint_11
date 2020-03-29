export default class Validation {
    constructor(argument) {
        this.nameErrorContainer = argument.error.container.name;                   
        this.infoErrorContainer = argument.error.container.info;

        this.valueMissing = argument.error.text.valueMissing;
        this.tooShort = argument.error.text.tooShort;
        this.typeMismatch = argument.error.text.typeMismatch;
    }

    check(form) {
        
        this.errorName = form.querySelector(`.${this.nameErrorContainer}`);
        this.errorInfo = form.querySelector(`.${this.infoErrorContainer}`);

        this.name = form.elements.name;
        this.info = form.elements.info;
        this.submit = form.elements.submit;

        this.checkName(this.name, this.errorName);
        this.checkInfo(this.info, this.errorInfo);
        
        this.checkSubmit(this.name, this.info, this.submit);
    }


    checkName(name, error) {
        if (event.target === name) {
            this.error(name, error);
        }
    }

    checkInfo(info, error) {
        if (event.target === info) {
            this.error(info, error);
        }
    }

       checkSubmit (name, info, submit) {
            
            if (name.validity.valid && info.validity.valid) {
                submit.removeAttribute("disabled");
            } else {
                
                submit.setAttribute("disabled", true);
            }
        }
    error(input, error) {
        if (input.validity.valueMissing) {
            error.textContent = this.valueMissing;
            return;
        }
        if (input.validity.tooShort) {
            error.textContent = this.tooShort;
            return;
        }
        if (input.validity.typeMismatch) {
            error.textContent = this.typeMismatch;
            return;
        }
        error.textContent = null;
    }    
    }
