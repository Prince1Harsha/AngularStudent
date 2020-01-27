import { Injectable } from '@angular/core';
import { IStudent } from './studentlist';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {

  getStudents() : IStudent[]{

    return [
      { id : 'stu101', name : 'Shreyas' , gender : 'Male', dateOfBirth : '30/04/1990'},
      { id : 'stu102', name : 'Yashas' , gender : 'Male', dateOfBirth : '13/06/1993'},
      { id : 'stu103', name : 'Mary' , gender : 'Female', dateOfBirth : '23/02/1995'},
      { id : 'stu104', name : 'Krishna' , gender : 'Male', dateOfBirth : '04/04/1996'}
    ];
    

  }

  constructor() { }
}
