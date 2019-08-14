import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

let urlApi = "";

const HttpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilmManagementService {

  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  public GET(uri: string): Observable<any> {
    return this.http.get(urlApi + uri, HttpOptions).pipe(
      tap(
        // Success
        () => {
          // Loading
        },
        // Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  };
  // QuanLyPhim/LayDanhSachPhim?MaNhom=GP09

  public POST(uri: string, data?: object): Observable<any> {
    return this.http.post(urlApi + uri, data, HttpOptions).pipe(
      tap(
        // Success
        () => {
          console.log("loading");
        },
        // Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }

  handleErr(err) {
    return err;
  }
}
