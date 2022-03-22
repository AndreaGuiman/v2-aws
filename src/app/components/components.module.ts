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
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component'
import { BookService } from "../service/book-service";
import { ViewBookComponent } from './view-book/view-book.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
    declarations: [
      HomeComponent,
      LoginComponent,
      SignupComponent,
      PageNotFoundComponent,
      AccountComponent,
      ContactComponent,
      ViewBookComponent,
      AddBookComponent
    ],

    imports: [
      HttpClientModule,
      MatTableModule,
      MatFormFieldModule,
      MatSelectModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatSnackBarModule
    ],

    exports: [
      MatSnackBarModule
    ],

    providers: [
      UserService, BookService
    ],
})

export class ComponentsModule{}