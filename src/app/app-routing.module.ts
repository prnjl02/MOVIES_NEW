import {Routes , RouterModule} from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { LoginComponent } from './login/login.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const routes:Routes=[
    {path:'login' , component:LoginComponent },
    {path:'' ,redirectTo:"/login",pathMatch:'full' },
    {path:'moviedetail', component: MoviedetailComponent}
  ];

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })
  export class AppRoutingModule{}