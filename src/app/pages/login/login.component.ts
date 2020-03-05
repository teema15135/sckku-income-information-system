import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Credential } from 'src/app/models/credential.model';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.credForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.loggingIn = true;
    this.auth.relogin().then(success => {
      if (success) {
        this.toastr.success('เข้าสู่ระบบสำเร็จ');
        this.router.navigate(['/main']);
      }
    }).catch(err => console.error(err))
    .finally(() => this.loggingIn = false);
  }

  login() {
    if (this.loggingIn) {
      return;
    }
    if (!this.credForm.valid) {
      this.toastr.warning('กรุณากรอก ชื่อผู้ใช้ และรหัสผ่าน');
      return;
    }
    const cred: Credential = this.credForm.value;
    this.loggingIn = true;
    this.auth.login(cred).then(res => {
      if (res) {
        this.toastr.success('เข้าสู่ระบบสำเร็จ');
        this.router.navigate(['/main']);
      } else {
        this.toastr.error('เข้าสู่ระบบไม่สำเร็จ ชื่อผู้ใช้ หรือรหัสผ่าน อาจไม่ถูกต้อง');
      }
    }).catch(err => console.error(err))
    .finally(() => this.loggingIn = false);
  }

}
