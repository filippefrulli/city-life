import axios from 'axios';

export const createEvent = async (newEvent) => {

    if (newEvent) {
        console.log("THE EVENT:", newEvent);
        axios.post("http://localhost:9000/api/event", newEvent, {
            headers: {
                "Content-Type": "application/json",
            }
        }).catch((err) => {
            console.log(err)
        }).then((res) => {
            console.log("res:", res);
        });
    }
}

export const getAllEvents = async () => {

    return axios.get("http://localhost:9000/api/events")
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
        });
}

export const getEventById = async (id) => {

    return axios.get("http://localhost:9000/api/event/" + id)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
        });
}