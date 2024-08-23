import type { Fruit } from '../components/common.types'
import axios from 'axios';

//response from API is and array of objects so we need to specify its type.
//Due to Fruit is and object, APIResponse would be Array<Fruit>.

type APIResponse = Array<Fruit>;


const fruitsURL = "https://proxyserver-phi.vercel.app"
const fruitByIdURL = (id: number) => `https://proxyserver-phi.vercel.app/showd/${id}`

//con axios
const getDataFromApi = async (): Promise<APIResponse> => { //Promise is built in Typescript

    try {
        const { data } = await axios.get<APIResponse>(fruitsURL); //axios.get() starts a request and returns a promise
        return data

    } catch (error) {
        throw new Error("There was an error on request or process data") //new Error(): Explicitly creates a new instance of Error, providing greater clarity and adherence to standard JavaScript conventions.
    }

}


const getDataByIdFromApi = async (id: number) => {
    try {
        const response = await axios.get<Fruit>(fruitByIdURL(id)); //As the expected answer is Fruit Type

        if (!response) { return null }

        return response.data; //When we analyze Api response in console, we can see that its response is inside "data" property

    } catch (error) {
        throw Error("There was an error on request or process data")
    }


};

export { getDataFromApi, getDataByIdFromApi }

