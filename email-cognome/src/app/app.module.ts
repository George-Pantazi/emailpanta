import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    SentMailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
