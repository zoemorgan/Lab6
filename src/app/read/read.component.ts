import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyMovies: any = [];
  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.movieService.GetMovieInformation().subscribe((data) => {
      this.MyMovies = data.myMovies;
      console.log(this.MyMovies);
    })
  }

}
