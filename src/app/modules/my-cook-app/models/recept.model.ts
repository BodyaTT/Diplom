export class Shopping {
    constructor(public title: string, public completed: boolean = false, public id?: string){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

export class Recept {
    id?: string;
    label: string;
    diet?: string;
    ingredients: number;
    receptImage: string;
    calories: number;
    ingradientLines: string[];
    constructor(recepts: any){
        this.label = recepts.recipe.label;
        this.diet = recepts.recipe.dietLabels[0];
        this.ingredients = recepts.recipe.ingredientLines.length;
        this.receptImage = recepts.recipe.image;
        this.ingradientLines = recepts.recipe.ingredientLines;
        this.calories = recepts.recipe.calories;
    }
}

export interface User{
    uid: string;
    email: string;
    photoUrl?: string;
    displayName?: string;
    shopping: Shopping;
    favorites: Recept; 

}