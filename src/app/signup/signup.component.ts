import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public expectency = {
    age: 42,
    smoke: true,
    drink: 100,
    activity: 0,
    weight: 300
  }

  constructor() { }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public barChartLabels:string[] = ['Smoking', 'Exercise', 'Weight', 'Family History', 'Other'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [-5, 4, 3, -2, 1], label: 'Years gained / lost'}
  ]
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  ngOnInit() {
  }

}
