import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-render',
  templateUrl: './lista-render.component.html',
  styleUrls: ['./lista-render.component.css']
})
export class ListaRenderComponent implements OnInit {
  animals = [
    {name: 'bob', type: 'dog'},
    {name: 'pssiu', type: 'passaro'},
    {name: 'manso', type: 'cat'},
    {name: 'alazam', type: 'cavalo'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
