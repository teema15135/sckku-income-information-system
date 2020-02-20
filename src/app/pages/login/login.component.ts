import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Credential } from 'src/app/models/credential.model';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credForm: FormGroup;

  loggingIn = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private storage: StorageService,
  ) { }

  ngOnInit() {
    this.credForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loggingIn) {
      return;
    }
    if (!this.credForm.valid) {
      alert('Please fill form.');
      return;
    }
    const cred: Credential = this.credForm.value;
    this.loggingIn = true;
    this.auth.login(cred).then(res => {
      if (res) {
        alert('Login success');
        this.router.navigate(['/main']);
      } else {
        alert('Login fail username or password might not match');
      }
    }).catch(err => console.error(err))
    .finally(() => this.loggingIn = false);
  }

}
