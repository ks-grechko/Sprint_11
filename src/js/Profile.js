export default class Profile {
    constructor(profile, api, popup) {
        
        this.name = document.querySelector(`.${profile.name}`);
        this.about = document.querySelector(`.${profile.about}`);
        this.avatar = document.querySelector(`.${profile.avatar}`);

        this.api = api;
        this.popup = popup;
    }

    addList(name, about, avatar) {
        this.name.textContent = name;
        this.about.textContent = about;

        if (!!avatar) {
            this.addPhoto(avatar);
        }

    }
    addPhoto(avatar) {
        
        this.avatar.src = avatar;
        
        this.avatar.onload = () => {
            
            this.avatar.hidden = false;
        }
    }


    get(name, about) {
        this.api.patchUser({
            name: name,
            about: about
        })
        .then(user => {
            const { name, about } = user;
            this.addList(name, about)
            this.popup.reset();
            
        })
        .catch(err => {
            console.log('Ошибка get', err);
        });

    }

    
    render() {
        this.api.info()
            .then(data => {
                const { name, about, avatar } = data;
                this.addList(name, about, avatar);
            })
            .catch(err => {
                console.log('Ошибка render', err);
            });
            
    }
}