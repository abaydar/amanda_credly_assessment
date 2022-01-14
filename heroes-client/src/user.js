class User {

    static all = []

    static userList= document.getElementById('user-list')

    constructor({id, first_name, last_name, age}){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.age = age

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `user-${this.id}`
    }

    userHTML(){
        this.element.innerHTML += `
            <strong>Name:</strong> ${this.first_name} ${this.last_name}<br>
            <strong>Age:</strong> ${this.age}
            <br>
            <button id="add-badge-${this.id}">Add Badge</button>
            <br><br>
        `

        return this.element
    }

    appendUserToDOM(){
        User.userList.appendChild(this.userHTML())
    }


}