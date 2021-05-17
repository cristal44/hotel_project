export default class DisplayedHotel {
    id;
    name;
    state;
    city;
    street;
    zipCode;
    hotelAddress;

    constructor(name, state, city, street, zipCode) {
        this.name = name;
        this.state = state;
        this.city = city;
        this.street = street;
        this.zipCode = zipCode
    }

}