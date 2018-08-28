import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-capturar',
  templateUrl: './capturar.component.html',
  styleUrls: ['./capturar.component.css']
})
export class CapturarComponent implements OnInit {
  public name: string;
  @Output()
  public enviar = new EventEmitter<string>();

  public agregar ()
  {
    this.enviar.emit(this.name);
    this.name = "";
  }
  constructor() { }

  ngOnInit() {
  }

}
