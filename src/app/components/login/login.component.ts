import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/model/user';
import { UserService } from 'src/app/service/user-service';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user!: User;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    this.userService.login(this.getUser()).subscribe(user => {
      this.user = {
        id: user.id,
        username: user.username,
        password: user.password,
        idClient: user.idClient,
        idAdmin: user.idAdmin
      }
    });

    //loading screen

    setTimeout(() => {
        if(this.user != null){
          //snackbar
          console.log("acest user exista");
          console.log(this.user);
          this.router.navigate(['home']); 
        }
        else{
          console.log("nu exista acest user");
        }
    }, 5000)
  }

  private getUser(): any{

    let user = {
      username: (document.getElementById('username') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    }

    return user;
  }
}
