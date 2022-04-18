import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createdForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: [ '', [Validators.required]],
      country: [  '', [Validators.required]
      ]
    })
  }

  logPerson(){

  }

}
