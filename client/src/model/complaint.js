export default class Complaint {
    id
    firstname
    lastname
    email
    phone
    reason
    details

    constructor(firstname, lastname, email,phone, reason, details) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phone = phone
        this.reason = reason
        this.details = details
    }
}
