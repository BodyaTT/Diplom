export class Shopping {
    constructor(public title: string, public completed: boolean = false, public id: number){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}