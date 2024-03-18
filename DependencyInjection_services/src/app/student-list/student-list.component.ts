import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 public students:any;

  constructor(private std:StudentService) { 
      this.students=std.getStudents();
      console.log(this.students)
  }

  ngOnInit(): void {
  }
  
  

}
