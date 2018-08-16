import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee() {
    return [
      {"id":1, "name":"deepika", "age":100},
      {"id":2, "name":"deepthi", "age":100},
      {"id":3, "name":"madeudea", "age":100}

    ];
  }
}
