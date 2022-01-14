class User {

    static all = []

    static userContainer = document.getElementById('user-container')

    constructor({id, first_name, last_name, age}){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.age = age

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `user-${this.id}`
    }

    userHTML(){
        this.element.innerHTML += `
            <h2>Name: ${this.first_name} ${this.last_name}</h2>
            <h3>Age: ${this.age} </h3>
            <button id="add-badge-${this.id}">Add Badge</button>
        `
    }

    appendUserToDOM(){
        User.userContainer.appendChild(this.userHTML())
    }


}