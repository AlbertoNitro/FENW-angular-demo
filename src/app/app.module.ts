import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './core/http.service';
import { GithubService } from './api-github/github.service';
import { ApiItemsService } from './api-items/api-items.service';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';

import { DirectiveMiwComponent } from './directive-miw/directive-miw.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,

    AppRoutingModule.components,

    DirectiveMiwComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, GithubService, ApiItemsService]

})
export class AppModule { }
