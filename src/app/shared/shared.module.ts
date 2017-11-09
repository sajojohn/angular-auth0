import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { environment } from '../../environments/environment';

export function authenticatedHttpServiceFactory(http: Http, options: RequestOptions) {
  console.log('environment', environment.authConfig.idTokenName);
  // configures AuthHttp  by initiating AuthConfig. AuthConfig is used in other angualr2-jwt functions
  return new AuthHttp(new AuthConfig({   
    tokenName: environment.authConfig.idTokenName,
    tokenGetter: (() => localStorage.getItem(environment.authConfig.idTokenName)),
    globalHeaders: [
      { 'content-type': 'application/json' },
      { 'accept': 'application/json' }]
  }), http, options);
}
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'environmentConfig', useValue: environment },
    {
      provide: 'AuthenticatedHttpService',
      useFactory: authenticatedHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
  ]
})
export class SharedModule { }
