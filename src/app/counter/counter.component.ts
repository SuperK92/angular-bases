import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `

    <h3>Counter: {{ counter }}</h3>

    <!-- <button (click)="increaseBy('Up')">+1</button>
    <button (click)="increaseBy('Down')">-1</button> -->
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `

})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  // increaseBy(value: string): void {

  //   if (value == 'Up')
  //   {
  //     this.counter += 1;
  //   }
  //   else if (value == 'Down')
  //   {
  //     this.counter -= 1;
  //   }
  // }

  increaseBy(value: number): void {

    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}

