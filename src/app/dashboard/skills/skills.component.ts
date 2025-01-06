import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  intervalid:any;
    imgs=['/assets/img/12.png',
      '/assets/img/5.jpg.png',
      '/assets/img/7.png',
      'https://th.bing.com/th/id/R.b25bae44ff516c7dcc3eacdb14d2c499?rik=5rI66KCDGmJOgQ&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1499955337microsoft-sql-server-logo-png.png&ehk=cFGE%2f%2fesEwqoP90RGgL2BquXFkUt7z4aF%2bLwj4hQ6GA%3d&risl=&pid=ImgRaw&r=0',
      '/assets/img/8.png',
      'https://th.bing.com/th/id/R.7384412324c769e447d3c4f86e9ff068?rik=0FOYbRJRU%2fE9gA&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/R.49de07c73f3f0aa203dbd9328f9fa4f7?rik=3YkaFfnCwLgdbA&pid=ImgRaw&r=0'
    ]

    misskills: string = `Soy un desarrollador con una sólida base en una variedad de tecnologías modernas que me permiten construir soluciones
     web eficientes y efectivas.  Aquí están mis habilidades clave:\n\nJava 21: experiencia en el desarrollo de aplicaciones utilizando Java, aprovechando las últimas características del lenguaje para escribir código
     limpio y eficiente.\n\nAngular 17: Experiencia en la creación de aplicaciones web interactivas con Angular 17, incluyendo la construcción de componentes, servicios y directivas para desarrollar interfaces de usuario
     dinámicas.\n\nSQL & MySQL: Conocimientos en el diseño y manejo de bases de datos relacionales con SQL y MySQL, creando estructuras de datos sólidas y realizando consultas eficientes para gestionar grandes
    volúmenes de información.\n\nSpring Framework: Habilidad en el desarrollo de aplicaciones backend con Spring Boot, diseñando APIs RESTful y gestionando la configuración y seguridad de aplicaciones.\n\nBootstrap: Experiencia en el uso de Bootstrap para diseñar interfaces de usuario responsivas y atractivas, personalizando temas y componentes para adaptarse a las necesidades del proyecto.\n\nAWS: Familiaridad con los servicios de Amazon Web Services (AWS), incluyendo EC2, S3, RDS y Lambda, para implementar y gestionar soluciones en la nube de manera eficiente.\n\nMi combinación de habilidades en estas tecnologías me permite abordar proyectos diversos con un enfoque adaptativo, asegurando soluciones bien diseñadas y funcionales, asi como creacion y consumo de ApiRestFull.`;

     currentIndex = 0;
     ngOnInit(): void {
      this.starinterval();
    }

     next() {
      this.currentIndex = (this.currentIndex < this.imgs.length - 1) ? this.currentIndex + 1 : 0;
    }

     starinterval(){
      this.intervalid=setInterval(()=>{
        this.next();
      },2000);
    }

  constructor() { }

}
