import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tokenize} from "@angular/compiler/src/ml_parser/lexer";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly url: string = 'http://challenge-react.alkemy.org/'
  constructor(private http: HttpClient,
              private router: Router,
  ) { }

  isLoggedIn() {
    if(localStorage.getItem("token")){
      return true
    }
    return false;
  }
  loginUser(login : any) : Observable<any>{
    console.log(login)
    return this.http.post(this.url, login);
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
  addToken(r: any) {
    localStorage.setItem("token", r.token)
  }
}
