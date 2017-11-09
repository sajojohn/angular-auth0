import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserSession } from '../model/userModel';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  authenticationErrorMessage = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {

    this.buildForms();
  }

  buildForms() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      'username': ['',
        [
          Validators.required
        ]
      ],
      'password': ['',
        [
          Validators.required
        ]
      ],
    });
  }

  login() {
    console.log('login user  here');
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((userSession: UserSession) => {
        console.log(' happy', userSession);
        this.router.navigate(['/products']);
      }, ((err: string) => {
        console.log('un-happy');
        console.log('auth failed', err);
        this.authenticationErrorMessage = err;
      }))


  }

}
