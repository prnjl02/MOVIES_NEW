import { Component, Input } from '@angular/core';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'movie details';
  public movies = [];

  constructor(private detail: DetailService) { }


//   input(moviename: string) {
//     this.detail.getDetail(moviename)
//       .subscribe(data => {
//       this.movies = data;
//         console.log("this.movies" + this.movies);
//       });/*  */

// }
}
