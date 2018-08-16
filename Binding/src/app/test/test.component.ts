import { Component, OnInit, Input,Output } from '@angular/core';
import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-test',
  template: `
         <h2 *ngIf="hasError">
            Hi Ram
         </h2>
         <h2> {{person | json}} </h2>
         <div [ngSwitch]="color">
         <div *ngSwitchCase ="'red'">this is red case</div>
         <div *ngSwitchCase ="'blue'">this is blue case</div>
         <div *ngSwitchCase ="'orange'">this is orange case</div>

         </div>
         <input [(ngModel)]="myname" type="text">
         {{myname}}
         <input #myin type="text">
         <button (click)="log(myin.value)">log</button>
         <button (click)="onClick($event)">clcik me</button>

         {{eventhandlig}}
         <h2 [style.color]="hasError ? 'yellow':'orange'">
            Style binding
         </h2>
         <h2 [style.color]="highlightColor">
         Style binding 2
      </h2>
         <h2>
            {{2+2}}
         </h2>
         <h2>
            {{name.length}}
         </h2>
         <h2 [class.text-danger]="hasError">
         <h2 [ngClass]="manageclass">
         this is checking multiple class
      </h2>
         this is checking another property
      </h2>
         <h2>
            {{greetUser()}}
         </h2>
         <h2 class="text-danger">
            {{href}}
         </h2>
         <h2 class="{{sclass}}">
         {{href}}
      </h2>
      <h2 class="text-special"  class="{{sclass}}">
             {{href}}
          </h2>

         <input [id] = "myid" value = "deepika">
         <input id = "{{myid}}" disabled value = "deepika">
         <input [disabled] = "false" value = "deepika">
         <input [disabled] = "isDisabled" value = "deepika">
         <input bind-disabled = "isDisabled" value = "deepika">
         `,
  styles:[]
})
//interpolation
//property binding
//event binding
//template reference variable
//two way binding
//structural directives
//component interaction
//pipes
/*
[`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `*/
export class TestComponent implements OnInit {
 public name = "vishwas";
 //@Input() public parentData;
 public href = window.location.href;
 public myid = "testid"
 public isDisabled = "false";
 public sclass = "text-success";
 public hasError = false;
 public highlightColor = "red";
 //pipes
public person= {
  "name": "deepika",
  "age":100
}
 //event binding
 public eventhandlig = "";

onClick(event) {
  console.log(event);
  this.eventhandlig = "event bidnig";
  //console.log(this.eventhandlig);
}
//template reference variable

log(value){
  console.log(value);
}
//ng switch case
public color = "red";
 //for ng-directive

 public isSpecial = true;
 public manageclass = {
   "text-success" :this.hasError,
   "text-danger" : !this.hasError
 }
 //two way binding
 public myname ="";
//component interaction

//@Output() public childEvent = new EventEmitter();
  constructor() { }
 /* fireEvent() {
    this.childEvent.emit('this is from chid to parent component');
  }
*/
  ngOnInit() {
  }
  greetUser() {
    return "hello " + this.name;
  }

}
