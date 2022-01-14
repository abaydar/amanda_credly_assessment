class UserService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getUsers(){
        fetch(`${this.endpoint}/users`)
        .then(res => res.json())
        .then(users => {
            for (const user of users){
                const u = new User(user)
                u.appendUserToDOM()
            }
        })
    }
}