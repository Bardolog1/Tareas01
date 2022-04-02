import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Tarea } from '../Modelo/Tarea';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }

Url='http://localhost:8080/TareasBack/tareas';

getTareas(){
  return this.http.get<Tarea[]>(this.Url);

}

}
