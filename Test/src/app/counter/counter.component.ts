import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public count=0;
public displayname="";


  @Output() public emitters=new EventEmitter();
  

 
  constructor() { }
  @Input() myname:string="";

  ngOnInit(): void {
  }
  public countup(){
    this.count++;
  }
  public countdown(){
    this.count--;
  }

  public getname(name:string){
    this.displayname=name;
    console.log(this.displayname);
  }
  public senddata(val:string){
    this.emitters.emit(val)
  }

  
    
  

}
