import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { routes } from './routes';


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})

export class RoutesModule { }
