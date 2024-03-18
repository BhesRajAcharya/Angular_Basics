import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public Empid:any

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // let id=this.route.snapshot.paramMap.get("id");
    // this.Empid=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get("id");
      this.Empid=id;
    })
  }
  previousEmp(){
     let previousid=parseInt(this.Empid)-1;
     this.router.navigate(["/employees",previousid])
  }

  nextEmp(){
    let nextid=parseInt(this.Empid)+1;
    this.router.navigate(['/employees',nextid]);
  }

}
