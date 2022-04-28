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
  listMenu: MenuItems[] = [];

  constructor(private menuService: MenuService,
  ) {
  }

  ngOnInit(): void {
    this.listMenu = this.menuService.getPlatos();
  }

  deleteMenu(menuItem: MenuItems) {
    this.menuService.deletePlato(menuItem);
    this.listMenu = this.menuService.getPlatos();
  }

}
