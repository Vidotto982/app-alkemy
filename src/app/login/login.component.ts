import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private createdForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

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
