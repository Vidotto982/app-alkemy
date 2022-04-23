import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login-service.";
import {MenuItemsService} from "../services/menu-items.service";
import {MenuItems,} from "../models/menu-items.interface";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: MenuItems[] = [];

  constructor(private loginService: LoginService,
              private platoService: MenuService,
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

  addPlato(event: boolean, menuItem: MenuItems)  {
    if(event == true){
    this.platoService.addPlato(menuItem);
    }
   }
}
