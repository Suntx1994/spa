import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { User } from 'src/app/Shared/Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiservice: APIService) { }
}
