import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
    <p>
     you selected id = {{departmentId}}
    <a (click)="goNext()"> Next </a>
    <a (click)="goPrevious()"> Previous </a>
   <div>
   <button (click) = "onBack()" > Back</button>
   </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId ;
  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
    //this.departmentId = id;
  }
  goNext() {
    let nextId = this.departmentId +1;
    this.router.navigate(['/department',nextId]);
  }
  goPrevious() {
    let preId = this.departmentId -1;
    this.router.navigate(['/department',preId]);
  }
  onBack() {
    let selectedId = this.departmentId? this.departmentId:null  ;
    this.router.navigate(['/department',{id: selectedId}]);

  }

}
