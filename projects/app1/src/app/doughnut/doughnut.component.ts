import { Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
  
})
export class DoughnutComponent implements OnInit {
//private subscription:Subscription;
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('assets/data1.json').subscribe(data=>{
      console.log(data);
    })
  }

}
