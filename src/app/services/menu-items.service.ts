import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {

  readonly url: string = '/api/food/menuItems/search?query=a&apiKey=823d60a4694c49a6ad91a822f6b1ea90'
  res: any;
  constructor(private http: HttpClient,
  ) {

  }
  getMenu(): any {
    let header = new HttpHeaders().set('Type-content', 'application/json').set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Methods','*')
    return this.http.get(this.url,{headers: header})
  }

  deleteMenu(id: any): Observable<{}> {
    const ulrMenu = `${this.url}/${id}/{access}`;
    return this.http.delete(ulrMenu);
  }

}
