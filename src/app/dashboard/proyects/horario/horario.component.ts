import { Component } from '@angular/core';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  descripcion!:string;
  titulo!:string;


  constructor(){
    this.titulo="Gestion de horarios"
    this.descripcion="Proyecto Restfull que maneja estados para la gestion de patrulleros y personal, creado con bases de datos relacionaes Mysql, Spring   y Angular, responsive para celulares."
  }

  gotohorario(){
    window.location.href = 'http://www.developer-rod.com//horario';
  }



}
