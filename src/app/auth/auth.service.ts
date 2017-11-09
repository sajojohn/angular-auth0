import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { tokenNotExpired, JwtHelper, AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { UserSession } from '../model/userModel';

const authApi = '/authenticate';

@Injectable()
export class AuthService {

    constructor(private router: Router, private http: Http) { }

    public get userSession(): UserSession {
        return JSON.parse(localStorage.getItem('userSession'));
    }

    public set userSession(userSession: UserSession) {
        localStorage.setItem('userSession', JSON.stringify(userSession));
    }

    public login(username, password): Observable<UserSession> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        const body = {
            'username': username,
            'password': password
        }

        return this.http.post(`${environment.apiBaseUrl}${authApi}`, body, { headers: headers })
            .map(result => result.json() as UserSession)
            .do((userSession: UserSession) => {
                if (userSession.idToken) {
                    this.userSession = userSession;
                    this.storeToken();
                    // save token in local storage.
                } else {
                    console.log('throwing error');
                    return Observable.throw('There was an error when logging in. Please try again.');
                }
            }).catch((err) => {
                console.log('error', err);
                return Observable.throw('Invalid credentials, please try again.');
            });

    }

    public logout() {
        this.removeTokensAndSession();
        this.router.navigate(['/login']);
    }

    private storeToken() {
        localStorage.setItem(environment.authConfig.idTokenName, this.userSession.idToken);
    }

    private removeTokensAndSession() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('userSession');
    }

    public authenticated() {
        return tokenNotExpired(environment.authConfig.idTokenName, localStorage.getItem(environment.authConfig.idTokenName));
    }
}
