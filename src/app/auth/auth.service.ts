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
                console.log('response receivede', userSession);
                if (userSession.idToken) {
                    console.log('success login');
                } else {
                    console.log('returning error');
                    return Observable.throw('There was an error when logging in. Please try again.');
                }
            }).catch((err) => {
                console.log('error', err);
                return Observable.throw('Invalid credentials, please try again.');
            })

    }

}
