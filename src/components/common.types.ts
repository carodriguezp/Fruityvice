type Nutritions = {

    name: string,
    id: number,
    family: string,
    order: string,
    genus: string,

}

type Fruit = {
    calories: number,
    fat: number,
    sugar: number,
    carbohydrates: number,
    protein: number,
    nutritions: Nutritions
}

export type { Nutritions, Fruit }