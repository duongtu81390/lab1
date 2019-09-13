import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  students =[
    {"ID":1,"FirstMidName":"Carson","LastName":"Alexander","EnrollmentDate":"2005-09-01"},          
    {"ID":2,"FirstMidName":"Meredith","LastName":"Alonso","EnrollmentDate":"2002-09-01"},         
    {"ID":3,"FirstMidName":"Arturo","LastName":"Anand","EnrollmentDate":"2003-09-01"},           
    {"ID":4,"FirstMidName":"Gytis","LastName":"Barzdukas","EnrollmentDate":"2002-09-01"},          
    {"ID":5,"FirstMidName":"Yan","LastName":"Li","EnrollmentDate":"2002-09-01"},      
    {"ID":6,"FirstMidName":"Peggy","LastName":"Justice","EnrollmentDate":"2001-09-01"},  
    {"ID":7,"FirstMidName":"Laura","LastName":"Norman","EnrollmentDate":"2003-09-01"},    
    {"ID":8,"FirstMidName":"Nino","LastName":"Olivetto","EnrollmentDate":"2005-09-01"}
    ];
}
