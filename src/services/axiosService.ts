import axios from 'axios';

const SOFTTEK_CHALLENGE_URL = process.env.SOFTTEK_CHALLENGE_URL


export const getModel = async (model: string, id: number): Promise<any> =>  {

    try {
        return await axios.get(`${SOFTTEK_CHALLENGE_URL}/${model}/${id}/`);
    } catch (error) {
        throw new Error('Error al obtener el personaje de Star Wars de Softtek Backend');
    }
}

export const createModel = async (model: string, id: number): Promise<any> =>  {

    try {
        return await axios.post(`${SOFTTEK_CHALLENGE_URL}/${model}/${id}/`);
    } catch (error) {
        throw new Error('Error al crear el personaje de Star Wars de Softtek Backend');
    }
}


