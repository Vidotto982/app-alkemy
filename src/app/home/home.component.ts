import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login-service.";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(  private loginService: LoginService,
                private menuService:  MenuService,
  ) {}

  ngOnInit(): void {
  }
getMenus(){
    this.menuService.getMenu();
}
  logOut() {
    this.loginService.logOut();
  }
}
