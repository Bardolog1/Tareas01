import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/Modelo/Tarea';
import {ServiceService}from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tareas:Tarea[] | undefined ;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getTareas()
    .subscribe(data=>{
      this.tareas=data;
    })
  }

}
