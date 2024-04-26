import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

type TObjNum = {
  num1: number;
  num2: number;
  num3: number;
};

const WIN_NUM = 1;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-casino-game';
  objNum: TObjNum = {
    num1: 0,
    num2: 0,
    num3: 0,
  };
  winNumber: number = 0;
  mess: string = '';
  bid: string = '';
  balance: number = 100;

  play() {
    this.winNumber = Math.floor(Math.random() * 10);
    if (this.winNumber === WIN_NUM) {
      const tempNum = Math.floor(Math.random() * 9);
      this.objNum = {
        num1: tempNum,
        num2: tempNum,
        num3: tempNum,
      };
      this.balance += parseInt(this.bid) * this.objNum.num1;
      this.mess = 'Jackpot Zeusss MAXWINN!!!!';
      return;
    }
    this.objNum = {
      num1: Math.floor(Math.random() * 9),
      num2:
        Math.floor(Math.random() * 9) !== this.objNum.num1
          ? Math.floor(Math.random() * 9)
          : this.objNum.num1 + 1,
      num3:
        Math.floor(Math.random() * 9) !== this.objNum.num1
          ? Math.floor(Math.random() * 9)
          : this.objNum.num2 + 2,
    };
    this.balance -= parseInt(this.bid);
    this.mess = 'You lose. Keep playing and Zeus will give you MAXWINN!!!';
  }
}
