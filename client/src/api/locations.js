import axios from 'axios';

export const createEvent = async (newLocation) => {

    if (newLocation) {b 
        axios.post("http://localhost:9000/api/location", newLocation, {
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

export const getAllLocations = async () => {

    return axios.get("http://localhost:9000/api/locations")
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
        });
}