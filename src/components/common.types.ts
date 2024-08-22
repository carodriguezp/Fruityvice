type Fruit = {

    name: string,
    id: number,
    family: string,
    order: string,
    genus: string,
    nutritions: Nutritions

}

type Nutritions = {
    calories: number,
    fat: number,
    sugar: number,
    carbohydrates: number,
    protein: number,
}

export type { Nutritions, Fruit }