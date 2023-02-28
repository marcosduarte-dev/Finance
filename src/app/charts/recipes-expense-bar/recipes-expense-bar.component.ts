import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-recipes-expense-bar',
  templateUrl: './recipes-expense-bar.component.html',
  styleUrls: ['./recipes-expense-bar.component.scss']
})
export class RecipesExpenseBarComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  constructor() {}
}
