import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  nome: String = 'Fulano';
  age: number = 31;

  car = {
    modelo: 'palio',
    ano: 2000
  }


  constructor() { }

  ngOnInit(): void {
  }

}
