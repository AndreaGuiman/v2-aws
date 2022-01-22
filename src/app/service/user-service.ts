import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../domain/model/user";

@Injectable()
export class UserService{

    private readonly apiUrlGet = "https://9wrsu8z6e4.execute-api.us-east-1.amazonaws.com/prod";
    private readonly apiUrlLogin = "https://yancvxo51d.execute-api.us-east-1.amazonaws.com/prod/";
    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Acces-Control-Allow-Origin': 'http://ec2-3-92-185-188.compute-1.amazonaws.com:4200'
        })
    };

    constructor(private httpClient: HttpClient,) {
    }

    getAll(): Observable<User[]>{
        return this.httpClient.get<User[]>(this.apiUrlGet, this.httpOptions);
    }

    login(user: User){

        return this.httpClient.post<User>(this.apiUrlLogin, user, this.httpOptions);
    }
}