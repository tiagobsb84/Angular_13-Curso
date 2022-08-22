import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  numeroRando: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
   this.numeroRando = Math.floor(Math.random() * 10);
  }

}
