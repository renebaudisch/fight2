import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlairfireComponent } from './flairfire/flairfire.component';
import { RouterModule } from '@angular/router';
import { ToolframeComponent } from './toolframe/toolframe.component';
import { ToolframeService } from './services/toolframe.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FlairfireComponent,
    ToolframeComponent,
    FooterComponent,
    LoginComponent,
    MessagesComponent,
    DatepickerComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: AppModule,
      providers: [
        ToolframeService
      ]
    };
  }
}
