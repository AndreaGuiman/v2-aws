export class User{

    id !: number;
    username !: string;
    password !: string;
    idClient !: number;
    idAdmin !: number;

    constructor(init ?: Partial<User>){

        Object.assign(this, init);
    }
}