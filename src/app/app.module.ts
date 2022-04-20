import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {AuthGuardService} from "./interceptors/interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
