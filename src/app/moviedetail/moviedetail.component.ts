import { Component, OnInit, Input,DoCheck } from '@angular/core';
import { DetailService } from '../detail.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit,DoCheck {
// @Input() searchBy:string;
private movies = [];
  constructor(private _detailService:DetailService) { }

 

  ngOnInit() {
    //console.log("searchBy"+this.searchBy);
    
  }
  ngDoCheck(){
    // console.log("searchBy 5 = "+this.searchBy);
    
  }
  input(moviename: string) {
    this._detailService.getDetailByName(moviename)
      .subscribe(data => {
      this.movies = data;
        console.log("this.movies" + this.movies);
      });/*  */

}




}





