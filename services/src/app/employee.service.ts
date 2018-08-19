import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, observable } from '../../node_modules/rxjs';
import 'rxjs/add/operator/catchError';
import 'rxjs/add/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string ="assets/data/employee.json";
  constructor(private http:HttpClient) { }
  getEmployee():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    .catchError(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse) {
    return observable.throw(error.message || "server Error");
  }
}
