import axios from 'axios';

export const client = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines"
})

export interface ResponseAPI {    
    id: string;
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    content: string;
}