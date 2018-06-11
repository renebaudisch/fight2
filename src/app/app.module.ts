import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlairfireComponent } from './flairfire/flairfire.component';
import {RouterModule} from '@angular/router';
import { ToolframeComponent } from './toolframe/toolframe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FlairfireComponent,
    ToolframeComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
