import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  public getStudents(){
    return [
      {name:"bijaya", city:"sunwal",age:23},
      {name:"arjun", city:"london",age:24},
      {name:"udaya", city:"butwal",age:25},
      {name:"sita", city:"sunwal",age:50}
    ];
  }
}
