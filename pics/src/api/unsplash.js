import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9pvsGHw78xdD8U2CW49bul429D9Pfcgz3okIvCZi7Wo'
    }
});
