import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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

  public user!: User;
  private usernameInput!: string;
  private passwordInput!: string;
  public showOverlay = false;

  constructor(private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(){

    this.showOverlay = true;
    this.getUserFromServicePostMethodLogin();

    setTimeout(() => {
        if(this.user != undefined){
          this.userFound();
        }
        else{
          this.getUserFromServicePostMethodLogin();
          console.log("still searching for the user");
          setTimeout(() => {
            if(this.user != undefined){
              this.userFound();
            }
            else{
              this.showOverlay = false;
              console.log("nu exista acest user sau credentialele sunt gresite");
              this.snackBarLoginUnsuccessful("No user was found with the provided input!");
            }
          }, 5000);
        }
    }, 5000)
  }

  signup(){

    this.router.navigate(['signup']);
  }

  private snackBarLogin(message: string){

    let config = new MatSnackBarConfig();
    config.duration = 1500;
    this.snackBar.open(message, undefined, config);
  }

  private snackBarLoginUnsuccessful(message: string){

    this.snackBar.open(message, "Retry");
    (document.getElementById('username') as HTMLInputElement).value = "";
    (document.getElementById('password') as HTMLInputElement).value = "";
  }

  private getUserFromInput(): any{

    this.usernameInput= (document.getElementById('username') as HTMLInputElement).value;
    this.passwordInput= (document.getElementById('password') as HTMLInputElement).value;

    if(this.usernameInput == "" || this.usernameInput == undefined ||
      this.passwordInput == "" || this.passwordInput == undefined){
        return undefined;
    }

    let user = {
      username: this.usernameInput,
      password: this.passwordInput
    }

    return user;
  }

  private getUserFromServicePostMethodLogin(): any{

    if(this.getUserFromInput() == undefined){
      return undefined;
    }

    let userFound = false;
    this.userService.login(this.getUserFromInput()).subscribe(user => {
      if(user != undefined){
        this.user = {
          id: user.id,
          username: user.username,
          password: user.password,
          idClient: user.idClient,
          idAdmin: user.idAdmin
        }
        userFound = true;
      }
    });

    if(!userFound){
      return undefined;
    }
  }

  private userFound(){
    this.showOverlay = false;
    console.log("acest user exista");
    console.log(this.user);
    this.snackBarLogin("Login successful");
    setTimeout(() => {
      this.router.navigateByUrl('home', { state: this.user});
    }, 2000)
  }
}
