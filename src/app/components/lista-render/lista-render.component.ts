import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-lista-render',
  templateUrl: './lista-render.component.html',
  styleUrls: ['./lista-render.component.css']
})
export class ListaRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: 'bob', type: 'dog', age: 4 },
    {name: 'pssiu', type: 'passaro', age: 3},
    {name: 'manso', type: 'cat', age: 5},
    {name: 'alazam', type: 'cavalo', age: 2}
  ]

  animal: Animal = {name: ' ', type: ' ', age: 0}

  animaisDetails = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animaisDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removendoAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }
}
