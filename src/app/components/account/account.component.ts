import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/domain/model/user';
import { BookService } from 'src/app/service/book-service';
import { UserService } from 'src/app/service/user-service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
@Injectable()
export class AccountComponent implements OnInit {

    user!: User;
  public showUserPage = false;

  constructor(private router: Router,) {

    this.user = this.router.getCurrentNavigation()!.extras.state as User;
  }

  ngOnInit(): void {

    if(!this.user){
      this.router.navigate(['login']);
      return;
    }

    this.showUserPage = true;
  }
}
