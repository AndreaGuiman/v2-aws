import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { UserService } from "../service/user-service";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
    declarations: [
      HomeComponent,
      LoginComponent,
      SignupComponent,
      PageNotFoundComponent
    ],

    imports: [
      HttpClientModule,
      MatTableModule,
      MatFormFieldModule,
      MatSelectModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule
    ],

    providers: [
      UserService
    ],
})

export class ComponentsModule{}