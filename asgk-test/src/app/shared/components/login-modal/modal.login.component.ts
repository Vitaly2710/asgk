import { Component } from '@angular/core';
import {LoginInterfaces} from "../../interfaces/login.interfaces";
import {HttpService} from "../../services/http.service";
import {filter, take} from "rxjs";

@Component({
  selector: 'modal-login',
  templateUrl: './modal.login.component.html',
  styleUrls: ['./modal.login.component.scss'],
  providers: [HttpService]
})
export class ModalLoginComponent {
  title = 'login';
  token = '';
  constructor(private httpService: HttpService) {
  }

  logIn(event: LoginInterfaces) {
    console.log(event)
    this.httpService.getToken(event.userName, event.userPassword).pipe(take(1)).subscribe((res) => console.log(res))
  }
}
