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
    recId?: string;
    recWord?: string;
    sourceUrl?: string;
    digest?: string[];
    
    constructor(recepts: any){
        this.label = recepts.recipe.label;
        this.diet = recepts.recipe.dietLabels[0];
        this.ingredients = recepts.recipe.ingredientLines.length;
        this.receptImage = recepts.recipe.image;
        this.ingradientLines = recepts.recipe.ingredientLines;
        this.calories = recepts.recipe.calories;
        this.sourceUrl = recepts.recipe.url;
        this.digest = recepts.recipe.digest;
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

export interface Diet{
    value: string;
    viewValue: string;
}

export class Filter{
    constructor(public maxIngradients: number, public diet: string, public minCalories: number, public maxCalories: number){
        this.maxIngradients = maxIngradients;
        this.diet = diet;
        this.minCalories = minCalories;
        this.maxCalories = maxCalories;
    }
}