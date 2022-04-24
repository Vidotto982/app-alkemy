import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MenuItems} from "../models/menu-items.interface";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private menu : MenuService,

  ) { }

  ngOnInit(): void {
  }

}
