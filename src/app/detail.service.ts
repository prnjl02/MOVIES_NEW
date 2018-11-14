import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from './movies';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DetailService {


  private _url: string = "http://www.omdbapi.com/?apikey=2a127d67&s=";

  constructor(private http: HttpClient) { }




  getDetailByName(moviename): Observable<any> {

    return this.http.get<IMovies>(this._url + moviename)
      .pipe(
        // map((res: Response) =>{ console.log("this.res"+ JSON.stringify(res.Search))})// returns a {0|1} element array
        map((res: Response) => res.Search// returns a {0|1} element array
        ));
  }

}
