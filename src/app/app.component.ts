import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: string[] = [];
  startValue = 10;
  height = 2;

  calculate(): void {
    this.result = [];

    let value = this.startValue;

    for (let i = 2; i <= this.height; i++) {
      const result = value * i;
      this.result.push(`${value}*${i} = ${result}`);
      value = result;
    }

    for (let i = 2; i <= this.height; i++) {
      const result = value / i;
      this.result.push(`${value}/${i} = ${result}`);
      value = result;
    }
  }
}
