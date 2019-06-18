import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = AppConstants.baseUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<any> {
    return this.http.get(this.baseUrl + '/articles/',
      {headers: this.httpHeaders});
  }
}
