import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login-service.";
import {MenuItemsService} from "../services/menu-items.service";
import {MenuItems,} from "../models/menu-items.interface";
import {MenuService} from "../services/menu.service";
import { fromEvent, scan, debounce, interval } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clear = '';
  searchName = '';

  menu: MenuItems[] = [];
  loading: any;
  constructor(private loginService: LoginService,
              private platoService: MenuService,
              public menuService: MenuItemsService,
  ) {
  }

  ngOnInit(): void {
    this.getMenus(this.searchName);
  }

  getMenus(searchName: string) {
    if(!searchName){
       searchName = 'a'
       this.menuService.getMenu(searchName).subscribe((res: any) => this.menu = res.menuItems);
    }else {
      this.menuService.getMenu(searchName).subscribe((res: any) => this.menu = res.menuItems);
    }
  }


  logOut() {
    this.loginService.logOut();
  }

  addPlato(event: boolean, menuItem: MenuItems)  {
    if (!event) return;
    this.platoService.addPlato(menuItem);

  }
}
