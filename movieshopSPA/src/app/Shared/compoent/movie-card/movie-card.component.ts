import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MoviesService } from 'src/app/Core/Services/movies.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  // @Input() test: string;

  @Output() buyMovieEvent = new EventEmitter<Movie>();
  constructor(private movieservice: MoviesService) { }

  ngOnInit() {
  }

  MovieClick(movie: Movie) {
    this.buyMovieEvent.emit(movie);
  }
}
