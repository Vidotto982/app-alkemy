import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import {AuthGuardService} from "./interceptors/interceptor.service";
import {MenuComponent} from "./menu/menu.component";
const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: []},
  {path: 'menu', component: MenuComponent, canActivate: []},
  {path: '', component: HomeComponent, canActivate: [AuthGuardService],
    children:[
      {path: 'home', component: HomeComponent, canActivate: []},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class AppRoutingModule { }
