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

  text:string='Lo que más me motiva es el impacto positivo que podemos tener en la vida de las personas. Creo firmemente en el poder del trabajo en equipo y el coraje para transformar situaciones desafiantes en momentos de esperanza y cambio.'
  ademas='Mi motivacion para seguir aprendiendo'
  hola:string='Hola, soy un desarrollador de software con experiencia en Java, MySQL y TypeScript. Estoy apasionado por tecnologías robustas y tengo un gran entusiasmo por seguir aprendiendo y creciendo profesionalmente. Mi objetivo es aportar soluciones eficientes y de calidad a proyectos desafiantes, mientras continuo ampliando mis conocimientos en el campo de la tecnología.'

  constructor(private router: Router, private activerouter: ActivatedRoute){}



}
