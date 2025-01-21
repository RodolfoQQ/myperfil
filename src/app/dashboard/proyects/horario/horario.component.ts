import { Component } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router){
    this.titulo="Gestion de horarios"


  }

  gotohorario(){

    window.location.href = 'http://horario.developer-rod.com/';
  }



}
