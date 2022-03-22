import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signup(){



    this.userService.signUp(this.getReq()).subscribe(temp => 
      console.log(temp));

    this.router.navigate(['home']);
  }

  getReq():any{
    let username = (document.getElementById('username') as HTMLInputElement).value;
    let password = (document.getElementById('password') as HTMLInputElement).value;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let tel = (document.getElementById('telephoneNumber') as HTMLInputElement).value;

    let requestModel = {
      username: username,
      password: password,
      name: name, 
      email: email,
      tel: tel
    }

    return requestModel
  }
}
