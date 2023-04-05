import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ModalLoginComponent} from "./shared/components/login-modal/modal.login.component";
import {LoginComponent} from "./pages/login/login.component";
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './pages/main/main.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CostumerListComponent } from './shared/components/costumer-list/costumer-list.component';
import { SearchElementComponent } from './shared/components/search-element/search-element.component';
import {MatIconModule} from "@angular/material/icon";
import { SendModalWindowComponent } from './shared/components/send-modal-window/send-modal-window.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {MessagingService} from "./shared/services/service/messaging.service";
import {AsyncPipe} from "@angular/common";

const appRoutes: Routes =[
  { path: '', component: LoginComponent},
  { path: 'main', component: MainComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    LoginComponent,
    LoginFormComponent,
    MainComponent,
    CostumerListComponent,
    SearchElementComponent,
    SendModalWindowComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireMessagingModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
  providers: [HttpClientModule, MessagingService,AsyncPipe],
  exports: [
    ModalLoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
