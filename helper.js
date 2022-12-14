import axios from 'axios';


export const reqInstance = axios.create({
    baseURL: 'https://shazam-core.p.rapidapi.com/v1',
    headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
      },
    }
)


