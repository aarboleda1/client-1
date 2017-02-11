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
    weight: 300,

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
    {data: [-5, 4, 3, -2, 1], label: 'Series A'}
  ];

  public barChartColors:any[] = [
    'white'
  ]
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
  }

}
