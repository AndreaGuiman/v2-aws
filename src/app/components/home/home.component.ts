import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/domain/model/book';
import { User } from 'src/app/domain/model/user';
import { BookService } from 'src/app/service/book-service';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user!: User;
  tableBooks: MatTableDataSource<Book> = new MatTableDataSource();
  books: MatTableDataSource<Book> = new MatTableDataSource();
  displayedColumns: string[] = ['title', 'genre', 'author'];

  constructor(private userService: UserService,
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) {

      this.user = this.router.getCurrentNavigation()!.extras.state as User;
      console.log(this.user);
      this.fetch();
     }

  ngOnInit(): void {
    //this.fetch();
    if(this.user != undefined){
      this.welcomeMessageSnackBar();
    }
  }

  private fetch(): void{

    this.userService.getAll().subscribe(users => {
      console.log(users);
    })

    this.bookService.getAll().subscribe(books => {
      this.tableBooks = new MatTableDataSource(books);
      this.books = new MatTableDataSource(books);
    })
  }

  private welcomeMessageSnackBar(){

    setTimeout(() => {
      let config = new MatSnackBarConfig();
      config.duration = 1500;
      this.snackBar.open(`Welcome back, ${this.user.username}`, undefined, config);    
    }, 1500);
  }

  searchBooks(event: any){

    var tempTableBooks: MatTableDataSource<Book> = new MatTableDataSource();
    
    if(!(event.target.value == "")){
      this.books.data.forEach(book => {
        if(book.title.toLowerCase().includes(event.target.value.toLowerCase())){
          tempTableBooks.data.push(book);
        }
      })

      this.tableBooks = tempTableBooks;
      return;
    }

    this.fetch();
  }

  viewBook(book: Book){

    this.router.navigateByUrl('view-book', { state: book });
  }

  goToAccount(){

    if(this.user == undefined){
      this.snackBarLogin("You need to be logged in to acces acount!");
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000);
      return;

    }

    this.router.navigateByUrl('account', { state: this.user });
  }

  private snackBarLogin(message: string){

    let config = new MatSnackBarConfig();
    config.duration = 1500;
    this.snackBar.open(message, undefined, config);
  }

  signout(){

    this.snackBarLogin("You are beign signed out of your account. Please wait!");
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }
}
