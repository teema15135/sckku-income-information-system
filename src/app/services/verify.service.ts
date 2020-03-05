import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Verify } from '../models/verify.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(
    private http: HttpClient
  ) { }

  getVerifyTable() {
    return this.http.get<Verify[]>(`${environment.apiDomainName}/verify`)
      .pipe(
        map(verify => verify.map(ver => {
          ver.different = ver.kkufmis - ver.daily;
          return ver;
        }))
      );
  }
}
