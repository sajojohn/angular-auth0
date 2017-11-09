import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component'
import { FooterComponent } from './footer/footer.component';
import { RoutesModule } from '../routes/routes.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    RoutesModule,
    SharedModule
  ],
  declarations: [LayoutComponent, FooterComponent, TopNavBarComponent],
  exports: [LayoutComponent, FooterComponent, TopNavBarComponent]
})
export class LayoutModule { }
