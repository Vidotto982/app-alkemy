import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {query} from "@angular/animations";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {
  res: any;
  apyKey: string = 'apiKey=823d60a4694c49a6ad91a822f6b1ea90'
  baseUrl: string = environment.url;
  private _query: string | undefined;
  readonly url: any;
  private fullUrl: string | undefined;
  constructor(private http: HttpClient,
  ) {

  }

  getMenu(searchName: string): any {
    const _query = `query=${searchName}`
    const fullUrl = `${(this.baseUrl)}${(_query)}&${(this.apyKey)}`;
    const url = fullUrl;
    let header = new HttpHeaders().set('Type-content', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', '*')
    return this.http.get(<string>url, {headers: header})
  }

  deleteMenu(id: any): Observable<{}> {
    const ulrMenu = `${this.url}/${id}/{access}`;
    return this.http.delete(ulrMenu);
  }

}
