import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginInterfaces} from "../../interfaces/login.interfaces";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() toLog = new EventEmitter()

  public loginEmpty = false;
  public passwordEmpty = false;

  constructor() { }

  ngOnInit(): void {
    this.subscribe()
  }

  private subscribe() {
    this.myForm.valueChanges.subscribe((i: LoginInterfaces) => {
      if(!i.userName) {
        this.loginEmpty = true;
        return
      }
      if(!i.userPassword) {
        this.passwordEmpty = true;
        return;
      }
      this.loginEmpty = false;
      this.passwordEmpty = false;
    } )
  }

  public myForm: FormGroup = new FormGroup({
    "userName": new FormControl(),
    "userPassword": new FormControl(),
  });

   public submit(){
    this.toLog.emit(this.myForm.value)
  }

}
