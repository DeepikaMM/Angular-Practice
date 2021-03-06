import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <h2>employee list</h2>
  <h1>{{em}}</h1>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public em ;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployee()
     .subscribe(data => this.employees = data,
      error => this.em = error);
  }

}
