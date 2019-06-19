import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AppConstants} from '../../constants';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  baseUrl = AppConstants.baseUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

   getAllAssociates(): Observable<any> {
    return this.http.get(this.baseUrl + '/whoarewe/',
      {headers: this.httpHeaders});
  }
}
