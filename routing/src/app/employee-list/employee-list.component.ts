import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  MyEmployees=[
    {"id":1,name:"adil"},
    {"id":2,name:"bijaya"},
    {"id":3,name:"arjun"},
    {"id":4,name:"udaya"},
    {"id":5,name:"sita"},
  ]

  constructor(private router:Router) { }

  getdata(employee:any){
   this.router.navigate(["/employees",employee.id])
  }


  ngOnInit(): void {
  }

}
