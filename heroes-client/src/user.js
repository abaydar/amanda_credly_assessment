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
            <br>
            <ul id="badge-list-${this.id}></ul>
            <button id="add-agility-badge-${this.id}" class="agility">Add Agility Badge</button>

            <button id="add-strength-badge-${this.id}" class="strength">Add Strength Badge</button>

            <br><br>
        `
        this.appendBadgesToDOM(this)
        return this.element
    }

    appendUserToDOM = () => {
        User.userList.appendChild(this.userHTML())
    }

    userBadges = () => {
        const userBadges = Badge.filterBadges(this.id)

        let userBadgesArr = userBadges.map(badge => {
            badge.element = document.createElement('li')
            badge.element.id = `badge-${badge.id}`

            badge.element.innerHTML += `
                ${badge.name} - ${badge.issued_at}
            `
        })

        return userBadgesArr
    }

    appendBadgesToDOM = (user) => {
        const badgeList = document.querySelector(`#badge-list-${user.id}`)
        for(let i=0; i<user.userBadges().length; i++){
            badgeList.appendChild(user.userBadges()[i])
        }
    }

    


}