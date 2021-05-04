export default class Room {
    room_type
    room_price
    room_status
    

    constructor(room_price, room_type, room_status) {
        this.room_type = room_type
        this.room_price = room_price
        this.room_status = room_status
    }
}
