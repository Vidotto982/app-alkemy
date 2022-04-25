import {Injectable} from '@angular/core';
import {MenuItems} from "../models/menu-items.interface";
import {MenuItemsService} from "./menu-items.service";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: MenuItems[] = [];

  constructor(private menuService: MenuItemsService,
  ) {
  }

  addPlato(menu: MenuItems) {
    this.listMenu.push(menu);
  }

  getPlatos() {
    return this.listMenu;
  }
}

