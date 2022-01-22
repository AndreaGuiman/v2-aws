import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetch();
  }

  private fetch(): void{

    this.userService.getAll().subscribe(users => {
      console.log(users);
    })
  }
}
