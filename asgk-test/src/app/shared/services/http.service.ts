import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getToken(login: string, password: string){
    const params = new HttpParams()
      .set('login', login)
      .set('password', password)
    return this.http.post('https://api.asgk-group.ru/test-auth-only', params)
  }


}
