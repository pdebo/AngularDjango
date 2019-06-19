import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl = AppConstants.baseUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<any> {
    return this.http.get(this.baseUrl + '/articles/',
      {headers: this.httpHeaders});
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/articles/' + id + '/',
      {headers: this.httpHeaders});
  }

  getAllAssociates(): Observable<any> {
    return this.http.get(this.baseUrl + '/whoarewe/',
      {headers: this.httpHeaders});
  }

}
