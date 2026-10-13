import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MemberService } from '../../services/member-service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

    chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [  ]
    }
  ];

  
  chartLabels: String[] = [];
  chartOptions: ChartOptions = {};

  Nb_Members: number = 0;
  Nb_Articles: number = 0;
  Nb_Tools: number = 0;
  Nb_Events: number = 0;
  //injection de dependances
  constructor(private MS: MemberService) {

    this.MS.getAllMembers().subscribe((members) => {
      this.Nb_Members = members.length;
      const Types =new Set (members.map(member => member.type));
      
      this.chartLabels = Array.from(Types);

      const count=Array.from(Types).map(l=>members.filter(member => member.type === l).length);
      this.chartData=[
        {
          data: count, 
        }
      ];



     // for (let i = 0; i < Types.length; i++) {
      //  const count=members.filter(member => member.type === Types[i]);

       
    });

  }

}
