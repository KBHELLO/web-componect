import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {Event} from '../../entity/event';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User []> {
    return this.http.get<User []>('../assets/user.json');
  }

  getEventService(): Observable<Event []> {
    return this.http.get<Event []>('../assets/json/event.json');
  }
}
