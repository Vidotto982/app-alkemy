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
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu().subscribe((res: any) => this.menu = res.menuItems);
  }

  logOut() {
    this.loginService.logOut();
  }

  addPlato(event: boolean, menuItem: MenuItems)  {
    if(event == true){
    this.platoService.addPlato(menuItem);
    }
   }

  search(searchName: string) {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      scan(i => ++i, searchName.length),
      debounce(i => interval(200 * i))
    )
    result.subscribe(res => console.log(searchName));
  }
}
