import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Beltrano';

  dados = {
    email: 'Beltrano@gmail.com',
    telefone: 61999999999
  }

  title = 'angular-curso';
}
