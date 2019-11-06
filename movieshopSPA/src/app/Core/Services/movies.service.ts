import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Observable } from 'rxjs';
import {Movie} from 'src/app/Shared/Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private apiservice: APIService) { }

  GetTopGrossingMovie(): Observable<Movie[]> {
    return this.apiservice.getAll('/movie/topgrossing');
  }
}
