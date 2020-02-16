import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // postDate = {
  //   username: 'user1',   // get username and password from input
  //   password: 'forsckku'  
  // }
  // url = 'http://localhost:3000/auth/login'

  // constructor(private http: HttpClient) { 
  //   this.http.post(this.url, this.postDate).toPromise().then(data => {
  //     console.log(data)
  //   })
  // }

  ngOnInit() {
  }

}
