import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrucelComponent } from '../carrucel/carrucel.component';

@Component({
  selector: 'app-myself',
  standalone: true,
  imports: [CarrucelComponent, MyselfComponent],
  templateUrl: './myself.component.html',
  styleUrl: './myself.component.css'
})
export class MyselfComponent {
  mensaje:boolean =false
  buzon:boolean=false
  presentacion:string='Soy un desayollador web, impulsado por conocer tecnologias modernas y darle uso en pro mejorar la vida de las personas, estoy convencido que las acciones que se hacen por motivaciones personales perduran en el tiempo y que los obstaculos que se presentan dia a dia  son facilmente superados por una mente que cree en si mismo.'

  constructor(private router: Router, private activerouter: ActivatedRoute){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}
//this.abrirmensaje();

  abrirmensaje(){
    this.mensaje= this.mensaje = !this.mensaje
    this.buzon = this.buzon = ! this.buzon
  }



}
