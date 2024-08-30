// file.ts and not file.tsx as api does not render any component
import axios from "axios";

import { getDataFromApi, getDataByIdFromApi } from "../api";


jest.mock("axios")

const fruitId = 1

describe('api services', () => {

    describe("getDataFromApi", () => {
        //HAPPY PATH
        describe("when succesful", () => {
            beforeEach(() => {
                axios.get = jest.fn().mockResolvedValue({ data: "test" }); //axios.get will be a jest function which has a mock value with data.
            })

            it("performs a GET request to api", () => {
                getDataFromApi()
                expect(axios.get).toHaveBeenCalledWith(`https://proxyserver-phi.vercel.app`)
            })
        })
        //UNHAPPY PATH
        describe("when unsuccesful", () => {

            beforeEach(() => {
                axios.get = jest.fn().mockRejectedValue(new Error()); //axios.get will be a jest function which has a mock value with data.
            })

            it("thows an error", async () => {

                await expect(getDataFromApi()).rejects.toThrow();
            })
        })

    })

    describe("getDataByIdFromApi", () => {
        //HAPPY PATH
        describe("when succesful", () => {

            beforeEach(() => {
                axios.get = jest.fn().mockResolvedValue({ data: "test" });
            })

            it("performs a GET request to api based on id provided", () => {
                getDataByIdFromApi(fruitId)
                expect(axios.get).toHaveBeenCalledWith(
                    `https://proxyserver-phi.vercel.app/showd/${fruitId}`
                )
            })
        })
        //UNHAPPY PATH
        describe("when unsuccesful", () => {

            beforeEach(() => {
                axios.get = jest.fn().mockRejectedValue(new Error()); //axios.get will be a jest function which has a mock value with data.
            })

            it("thows an error", async () => {

                await expect(getDataByIdFromApi(fruitId)).rejects.toThrow();
            })
        })
    })

})
