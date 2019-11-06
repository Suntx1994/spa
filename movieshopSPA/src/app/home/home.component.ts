import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Core/Services/movies.service';
import { Movie } from '../Shared/Models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[];

  constructor(private movieservice: MoviesService) { }

  ngOnInit() {
    console.log('debugging 2');
    this.movieservice.GetTopGrossingMovie().subscribe(
      m => {
        this.movies = m;
        // console.log('0');
        // console.log(this.movies[0]);
      }
    );
  }

  BuyMovie(movie: Movie) {
    console.log('Inside the home component event');
    console.log(movie);
    // Step1 : in the child component create output decorator to emit a event using eventEmitter
    // for example, in child compoent, we want to send data to parent component when we click on a button
    // your child click method should emit data using emit method

    // Parent: Since output is a event, we use normal brackets to subscribe the event and the data would be
    // inside the $event
  }

}
