import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpService } from './core/http.service';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveNgComponent } from './directive-ng/directive-ng.component';
import { CrudComponent } from './crud/crud.component';
import { ApiResponseComponent } from './api-response/api-response.component';
import { ApiGithubComponent } from './api-github/api-github.component';
import { RouteComponent } from './route/route.component';
import { DirectiveMiwComponent } from './directive-miw/directive-miw.component';
import { PipeComponent } from './pipe/pipe.component';
import { ObserverComponent } from './observer/observer.component';
import { GithubService } from './api-github/github.service';
import { ApiItemsComponent } from './api-items/api-items.componet';
import { ApiItemsService } from './api-items/api-items.service';
import { CounterObservableComponent } from './couter-observable/counter-observable-component';
import { HeadComponent } from './head/head.component';
import { SubComponentsModule } from './sub-components/sub-components.module';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BindingComponent } from './binding/binding.component';
import { Route1Component } from './route/route1.component';
import { Route2Component } from './route/route2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, CoreModule, AppRoutingModule, SubComponentsModule
  ],
  declarations: [
    AppComponent, HeadComponent, DirectiveNgComponent, HomeComponent, TypescriptComponent, BindingComponent,
    CrudComponent, ApiResponseComponent, ApiGithubComponent, ApiItemsComponent, RouteComponent, Route1Component, Route2Component,
    DirectiveMiwComponent, ObserverComponent, PipeComponent, CounterObservableComponent, PageNotFoundComponent, FootComponent

  ],
  bootstrap: [AppComponent],
  providers: [HttpService, GithubService, ApiItemsService]

})
export class AppModule { }
