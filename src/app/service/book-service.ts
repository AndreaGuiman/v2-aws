import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../domain/model/book";

@Injectable()
export class BookService{

    private readonly apiUrlGetBooks = "https://e18ulklom8.execute-api.us-east-1.amazonaws.com/prod";
    private readonly apiUrlPostBook = "x";
    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Acces-Control-Allow-Origin': 'http://ec2-3-90-43-92.compute-1.amazonaws.com:4200'
        })
    };

    constructor(private httpClient: HttpClient,) {
    }

    getAll(): Observable<Book[]>{
        return this.httpClient.get<Book[]>(this.apiUrlGetBooks, this.httpOptions);
    }

    saveBook(book: Book){

        return this.httpClient.post<Book>(this.apiUrlPostBook, book, this.httpOptions);
    }
}