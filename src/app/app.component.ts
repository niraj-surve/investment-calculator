import { Component } from '@angular/core';
import { InvestmentService } from './investment-results/investment.service';
import InvestmentResult from './investments.type';
import Data from './user-input/data.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  investmentResults!: InvestmentResult[];

  constructor(private investmentService: InvestmentService){}

  calculateInvestments(data: Data){
    this.investmentResults = this.investmentService.calculateInvestmentResults(data);
    console.log(this.investmentResults);
  }
}
