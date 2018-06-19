import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlairfireComponent } from './flairfire/flairfire.component';
import { RouterModule } from '@angular/router';
import { ToolframeComponent } from './toolframe/toolframe.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FlairfireComponent,
    ToolframeComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
