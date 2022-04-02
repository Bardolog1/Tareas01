import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './Tareas/listar/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tareas01';
  constructor (private router:Router){}

Listar(){
  this.router.navigate(["listar"]);
  }

Nueva(){

this.router.navigate(["add"]);

}


}
