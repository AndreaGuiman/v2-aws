import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestModel } from "../domain/model/request-model";
import { User } from "../domain/model/user";

@Injectable()
export class UserService{

    private readonly apiUrlGet = "https://9wrsu8z6e4.execute-api.us-east-1.amazonaws.com/prod";
    private readonly apiUrlLogin = "https://yancvxo51d.execute-api.us-east-1.amazonaws.com/prod/";
    private readonly apiUrlSignup = "https://pidul2py98.execute-api.us-east-1.amazonaws.com/prod/";
    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
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

    signUp(reqeustModel: RequestModel){

        return this.httpClient.post<RequestModel>(this.apiUrlSignup, reqeustModel, this.httpOptions);
    }
}