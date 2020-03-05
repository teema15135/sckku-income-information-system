import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user: any;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    console.log(this.user);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
