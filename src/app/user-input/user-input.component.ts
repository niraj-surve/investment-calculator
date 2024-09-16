import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Data from './data.type';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  data: Data = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  @Output() calculate = new EventEmitter<Data>();

  onSubmit() {
    this.calculate.emit(this.data);
    this.data = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    };
  }
}
