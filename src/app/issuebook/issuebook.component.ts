import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  validate:boolean=true;
  myvalueid:boolean=true;
  nameval:boolean=true;
  defaultStudentName:string="";
  myvaluebook:boolean=true;
  defaultBookName:string='';
  booknameval:boolean=true;

  //when we write backend i will implement it to completely for now its demo//
  stuidChange(value:string){
       if(parseInt(value)==12345){
          this.myvalueid=false;
          this.nameval=false;
          this.defaultStudentName="vishal";
       }
  }
  bookChanges(value:string){
    if(parseInt(value)==12345){
      this.myvaluebook=false;
      this.booknameval=false;
      this.defaultBookName="python master";
    }
  }
}
