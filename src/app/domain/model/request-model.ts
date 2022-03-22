export class RequestModel{

    idUser!: number;
    username!: string;
    password!: string;
    idClient!: number;
    name!: string;
    email!: string;
    tel!: string;

    constructor(init?: Partial<RequestModel>){

        Object.assign(this, init);
    }
}