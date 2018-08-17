import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul >
    <li (click)="onselect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments" >
    {{department.id}}-{{department.name}}
    </li>
    </ul>
  `,
  styles: [
    `li.selected{
      background-color:red;
    }
    `
  ]
})
export class DepartmentListComponent implements OnInit {
   departments = [
    {"id":1, "name":"CS"},
    {"id":2,"name":"ISE"}
  ];
  constructor(private router:Router, private activatedRouter:ActivatedRoute) { }
public selectedId;
  ngOnInit() {

    this.activatedRouter.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
  });}
  onselect(department) {
    this.router.navigate(['/department',department.id]);

  }
  isSelected(department){
    return this.selectedId==department.id;

  }

}
