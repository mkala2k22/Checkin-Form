import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule} from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckinComponent,
    LanguageSelectorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     HttpClientModule,
     TranslocoRootModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
