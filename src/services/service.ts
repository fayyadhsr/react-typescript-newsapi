import { client } from "../api/api"

export const getNews =  () => {

    return client.get(`?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`).then(res => {
        return res.data
    })
}

