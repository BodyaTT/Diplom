export class Shopping {
    constructor(public title: string, public completed: boolean = false, public id: number){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

export class Recept {
    id?: number;
    label: string;
    diet: string;
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

// export class Recepts{
//     label: string;
//     diet: string;
//     ingredients: number;
//     receptImage: string;
//     calories: number;
//     ingradientLines: string[];
//     constructor(recepts: any){
//         this.label = recepts.recipe.label;
//         this.diet = recepts.recipe.dietLabels[0];
//         this.ingredients = recepts.recipe.ingredientLines.length;
//         this.receptImage = recepts.recipe.image;
//         this.ingradientLines = recepts.recipe.ingredientLines;
//         this.calories = recepts.recipe.calories;
//     }
// }