import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
