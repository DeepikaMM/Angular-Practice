import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template:`
  <h2>employee list</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  constructor(private _employees:EmployeeService) {

   }

  ngOnInit() {
    this.employees = this._employees.getEmployee();
  }

}
