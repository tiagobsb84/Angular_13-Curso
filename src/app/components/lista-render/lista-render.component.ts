import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-lista-render',
  templateUrl: './lista-render.component.html',
  styleUrls: ['./lista-render.component.css']
})
export class ListaRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {name: ' ', type: ' ', age: 0}

  animaisDetails = '';

  constructor(private listService: ListService) { 
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animaisDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removendoAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((a) => (this.animals = a));
  }
}
