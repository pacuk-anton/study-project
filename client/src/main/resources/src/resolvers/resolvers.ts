import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserODto} from '../_common/generated';

@Injectable()
export class UserResolver implements Resolve<UserODto> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserODto> | Promise<UserODto> | UserODto {
    return this.http.get('/api/users') as Observable<UserODto>;
  }
}
