import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ModalLoginComponent} from "./shared/components/login-modal/modal.login.component";
import {LoginComponent} from "./pages/login/login.component";
import { LoginFormComponent } from './shared/components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    ModalLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
