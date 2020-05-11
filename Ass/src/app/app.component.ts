import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulater Master Class - Lecture 1 Assignment : Simple Calculator';  
  num1: any;
  num2: any;
  result: any;
  opval: string = "opval";

  calculate(x) {
    let firstval = parseInt(this.num1);
    let secondval = parseInt(this.num2);
    let result = 0;
    switch (x) {
      case 'add':
        result = firstval + secondval;
        this.opval = "+";
        break;
      case 'minus':
        result = firstval - secondval;
        this.opval = "-";
        break;
      case 'multiplication':
        result = firstval * secondval;
        this.opval = "x";
        break;
        case 'divide':
          result = firstval / secondval;
        this.opval = "/";
        break;      
        case 'clear':
          this.num1 = "";
          this.num2 = "";
          this.result = "";
          this.opval = "opval";
        break;
    }
    this.result = result;
  }
  
}
