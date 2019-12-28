import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/Shared/Models/userlogin';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { APIService } from './api.service';
import { JwtService } from './jwt.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiservice: APIService, private jwtService: JwtService) { }

  login(userLogin: UserLogin): Observable<boolean> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.apiservice.create('/user/login', userLogin, options)
      .pipe(map(response => {
        if (response) {
          this.jwtService.saveToken(response.token);
          return true;
        }
        return false;
      }));
  }

  logout() {
    this.jwtService.destroyToken();
  }
}
