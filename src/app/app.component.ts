import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';

  public add(firstTerm: number, secondTerm: number): number{
    return firstTerm + secondTerm;
  }

  public subtract(firstTerm: number, secondTerm: number): number{
    return firstTerm - secondTerm;
  }

  public multiply(firstTerm: number, secondTerm: number): number{
    return firstTerm * secondTerm;
  }

  public divide(firstTerm: number, secondTerm: number): number{
    return firstTerm / secondTerm;
  }

}
