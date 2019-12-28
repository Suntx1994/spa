import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Shared/Models/user';
import { LoginService } from '../Core/Services/login.service';
import { UserLogin } from '../Shared/Models/userlogin';
import { AuthService } from '../Core/Services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = {
    email: '',
    password: ''
  };

  invalidLogin: boolean;
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }
  login() {
    this.authService.login(this.userLogin)
      .subscribe((response) => {

        if (response) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.invalidLogin = true;
        }

      },
        (err: any) => this.invalidLogin = true);
  }

}
