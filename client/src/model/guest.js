export default class Guest {
    first_name = null;
    last_name = null;
    email_addr = null;
    phone_number = null;

    constructor(first_name, last_name, email_addr, phone_number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_addr = email_addr;
        this.phone_number = phone_number;
    }
}
