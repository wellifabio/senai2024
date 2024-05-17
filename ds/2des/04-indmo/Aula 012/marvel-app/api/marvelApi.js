import axios from 'axios';
import md5 from 'md5';

const publicKey = 'c4ca3283f7ffa89ff73a153629a2ad1b';
const privateKey = 'ff183bfcd1c8f7798be9a4f33ef30038b64f15b9';
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params:{
        ts,
        apikey: publicKey,
        hash,
    },
});

export const getCharacters = async (offset = 0, limit = 100) => {
    try {
        const responde = await api.get('/characters', {
            params: {
                offset,
                limit,
            },
        });
        return Response.data.data.results;
        } catch (error) {
            console.error(error);
            return[];
        }
};