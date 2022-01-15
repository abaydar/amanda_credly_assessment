class Badge {
    static all = []

    constructor({id, name, user_id, recipient_email, recipient_first_name, recipient_last_name, badge_template_id, issued_at}){
        this.id = id
        this.name = name
        this.user_id = user_id
        this.recipient_email = recipient_email
        this.recipient_first_name = recipient_first_name
        this.recipient_last_name = recipient_last_name
        this.badge_template_id = badge_template_id
        this.issued_at = issued_at

        Badge.all.push(this)
    }
    
    static filterBadges(userId){
        return this.all.filter((b) => {
            return b.user_id === userId
        })
    }
    
}