import { Fruit } from "./common.types";

export const mockFruitListFromApi: Array<Fruit> = [
    {
        name: "Piña",
        id: 1,
        family: "Bromeliaceae",
        order: "Poales",
        genus: "Ananas",
        nutritions: {
            calories: 50,
            fat: 0.12,
            sugar: 9.85,
            carbohydrates: 13.12,
            protein: 0.54
        }

    },
    {
        name: "Higo",
        id: 2,
        family: "Moraceae",
        order: "Rosales",
        genus: "Ficus",
        nutritions: {
            calories: 74,
            fat: 0.3,
            sugar: 16,
            carbohydrates: 19,
            protein: 0.8
        }
    }
]