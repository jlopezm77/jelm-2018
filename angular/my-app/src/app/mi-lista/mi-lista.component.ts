import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.css']
})
export class MiListaComponent implements OnInit {
  @Input()
public lista: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
