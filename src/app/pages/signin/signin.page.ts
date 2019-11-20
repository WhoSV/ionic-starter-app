import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss']
})
export class SigninPage {
  login = { username: '', password: '' };
  submitted = false;

  constructor(public router: Router) {}

  onSignin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.router.navigate(['list']);
    }
  }
}
