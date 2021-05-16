import axios from 'axios';

export default class RoomService {
    url = "http://localhost:8080/api/rooms";

    getAvailableRoomsByHotel(id){
        return axios.get(this.url+ '/hotel/' + id + '/available');
    }

    getAllRooms() {
        return axios.get(this.url);
    }

    getRoomById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveRoom(room) {
        return axios.post(this.url, room);
    }

    updateRoom(room, id) {
        return axios.put(this.url+ '/' + id, room)
    }

    deleteRoom(id) {
        return axios.delete(this.url+ '/' + id);
    }

}