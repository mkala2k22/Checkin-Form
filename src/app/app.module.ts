import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { CheckinformComponent } from './checkin/checkin.component';
import { TranslocoRootModule } from './transloco-root.module';

import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ApolloModule } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';





@NgModule({
  declarations: [
    AppComponent,
    CheckinformComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    GraphQLModule,
    ApolloModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

