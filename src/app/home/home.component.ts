import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login-service.";
import {MenuItemsService} from "../services/menu-items.service";
import { MenuItems, } from "../models/menu-items.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: MenuItems[] = [];
  constructor(private loginService: LoginService,
              public menuService: MenuItemsService,
  ) {
  }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu().subscribe((res: any) => this.menu = res.menuItems);

  }

  logOut() {
    this.loginService.logOut();
  }

  deleteMenu(menu: MenuItems): void {
    console.log(menu)
    this.menuService.deleteMenu(menu.id).subscribe((resp: any) => {
        this.getMenus();
      }
    );
  }
}
