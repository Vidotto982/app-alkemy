import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MenuItems} from "../models/menu-items.interface";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public listMenu: MenuItems[] = [];
  constructor(private menu: MenuService,
  ) {
  }

  ngOnInit(): void {
    this.listMenu = this.menu.getPlatos()
  }

  deleteMenu(menuItem: MenuItems) {
    this.listMenu = this.listMenu.filter(menu => menu != menuItem);
  }

}
