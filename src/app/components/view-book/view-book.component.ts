import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/domain/model/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  
  public book!: Book;

  constructor(private router: Router) {

    this.book = this.router.getCurrentNavigation()!.extras.state as Book;
    console.log(this.book);
   }

  ngOnInit(): void {
  }

}
