import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate() {
        console.log('auth guard invoked');
        if (tokenNotExpired(environment.authConfig.idTokenName, localStorage.getItem(environment.authConfig.idTokenName))) {
            return true;
        } else {
            this.authService.logout();
            return false;
        }
    }
}
