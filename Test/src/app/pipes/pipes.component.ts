import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
 public name="bijaya";
 person={
  name:"bhes raj",
  age:24,
  location:"sunwal"
 }
 str="my name is bijaya acharya";

 arr=[1,2,3,4,5,6,7,8,9,10]

 mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
