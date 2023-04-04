import { Component } from '@angular/core';
import {LoginInterfaces} from "../../interfaces/login.interfaces";

@Component({
  selector: 'modal-login',
  templateUrl: './modal.login.component.html',
  styleUrls: ['./modal.login.component.scss']
})
export class ModalLoginComponent {
  title = 'login';

  logIn(event: LoginInterfaces) {
    console.log(event)
  }
}
