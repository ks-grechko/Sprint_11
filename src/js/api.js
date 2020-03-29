export default class Api {
  constructor (argument) {
    this.url = argument.url;
    this.headers = argument.headers;
    
  }

  info(){
      return fetch(`${this.url}/users/me`, {
        method:'GET',
        headers: this.headers
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(`Что-то пошло не так ${res.status}`)
        })
    }
    
  patchUser(user) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
          name: user.name,
          about: user.about,
      })
  })
      .then(res => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Что-то пошло не так ${res.status}`);
      });
}

  
  loadCards(){
      return fetch(`${this.url}/cards`, {
        method:'GET',
        headers: this.headers
    })
    .then(res => {
        console.log(res);
        if(res.ok){
            
            return res.json();
        }
        return Promise.reject(`${res.status}. Что-то пошло не так в карточках`);
    })
    
}
postCards(user) {
  return fetch(`${this.url}/cards`, {
    method:'POST',
    headers: this.headers,
    body: JSON.stringify({
        name: user.name,
        link: user.link,
    })
})
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так ${res.status}`);
    });
}
}

//Токен: 45008fcf-a69b-43aa-afc0-7b18cdd7b79f
//Идентификатор группы: cohort7
//http://95.216.175.5/cohortId/users/me