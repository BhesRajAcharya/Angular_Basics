import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

   public students:any
  constructor(private std:StudentService) {
       this.students=std.getStudents();
   }

  ngOnInit(): void {
  }

}
