import axios from "axios";
import {API_URL, DOC_URL} from "./constants";


export const getDocs = async (model: string) => {
    const response = await axios.get(`${API_URL}`);

    const reply = [];
    let number = 1;
    for (let i = 0; i < response.data.length; i++){
        if (model == response.data[i].nameProduct) {
            let doc = '';
            //console.log(response);
            console.log(response.data[i].id);
            doc = `<a href=\"${DOC_URL}${response.data[i].link}\"><b>${response.data[i].title}</b></a>`;
            number++;
            reply.push(doc);
        }

    }
    return reply;
};