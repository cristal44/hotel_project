export default class Guest {
    id = null;
    firstName = null;
    lastName = null;
    email = null;
    phone = null;

    constructor(firstName, lastName, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}
