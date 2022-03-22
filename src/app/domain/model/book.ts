export class Book{

    id!: number;
    title!: string;
    genre!: string;
    author!: string;

    constructor(init?: Partial<Book>){

        Object.assign(this, init);
    }
}