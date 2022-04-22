import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {

  readonly url: string = '/api/food/menuItems/search?query=a&apiKey=3a646553158c46b7b94fe9159da4a04e'
  res: any;
  constructor(private http: HttpClient,
  ) {


    this.getMenu().subscribe((res: any) => {console.log(res); this.res = res; })
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
