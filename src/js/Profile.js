
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
            console.log('Ошибка отправки на сервер текста', err);
        });
    }

    render() {
        this.api.info()
            .then(data => {
                const { name, about, avatar } = data;
                this.addList(name, about, avatar);
            })
            .catch(err => {
                console.log('Ошибка отправки на сервер текста', err);
            });
    }
//Изменение 2    
    // constructor (){
    //     this.name = document.querySelector(".user-info__name");
    //      this.about = document.querySelector(".user-info__job");
    //      this.avatar = document.querySelector(".user-info__photo");
    // };

    // setUserInfo(newName, newAbout, newAvatar) {
    //     this.name = newName;
    //     this.about = newAbout;
    //     if (newAvatar) this.avatar = newAvatar;
    // };
    // renderUserInfo() {
    //     document.querySelector(".user-info__name").textContent = this.name;
    //     document.querySelector(".user-info__job").textContent = this.about;
    //     document.querySelector(".user-info__photo").style.backgroundImage = `url(${this.avatar})`;
    // };

//Изменение 1

//     constructor(api, popup) {
        
//         this.name = document.querySelector(".user-info__name");
//         this.about = document.querySelector(".user-info__job");
//         this.avatar = document.querySelector(".user-info__photo");

//         this.api = api;
//         this.popup = popup;
//     }

//     addList(name, about, avatar) {
//         this.name.textContent = name;
//         this.about.textContent = about;

//         if (!!avatar) {
//             this.addPhoto(avatar);
//         }

//     }
//     addPhoto(avatar) {
        
//         this.avatar.src = avatar;
        
//         this.avatar.onload = () => {
            
//             this.avatar.hidden = false;
//         }
//     }
//     get(name, about) {
//         this.api.patchUser({
//             name: name,
//             about: about
//         })
//         .then(user => {
//             const { name, about } = user;
//             this.addList(name, about)
//             this.popup.reset();
            
//         })
//         .catch(err => {
//             console.log('Ошибка отправки на сервер текста', err);
//         });
//     }

//     render() {
//         this.api.info()
//             .then(data => {
//                 const { name, about, avatar } = data;
//                 this.addList(name, about, avatar);
//             })
//             .catch(err => {
//                 console.log(' не рендерится', err);
//             });
            
//     }
}