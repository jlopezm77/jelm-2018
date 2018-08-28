import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;
  public items: Array<string> =[];

  constructor() {
    
  }

public agregar (n: string) {
  this.items.push(n);
}
  
}
