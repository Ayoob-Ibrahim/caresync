import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qusetion-answer-bank',
  imports: [CommonModule],
  templateUrl: './qusetion-answer-bank.component.html',
  styleUrl: './qusetion-answer-bank.component.scss'
})
export class QusetionAnswerBankComponent extends BaseDataReciever {

}
