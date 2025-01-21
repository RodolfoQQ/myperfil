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
      '/assets/img/7.png'
     // 'https://th.bing.com/th/id/R.b25bae44ff516c7dcc3eacdb14d2c499?rik=5rI66KCDGmJOgQ&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1499955337microsoft-sql-server-logo-png.png&ehk=cFGE%2f%2fesEwqoP90RGgL2BquXFkUt7z4aF%2bLwj4hQ6GA%3d&risl=&pid=ImgRaw&r=0',
     // '/assets/img/8.png',
     // 'https://th.bing.com/th/id/R.7384412324c769e447d3c4f86e9ff068?rik=0FOYbRJRU%2fE9gA&pid=ImgRaw&r=0',
     // 'https://th.bing.com/th/id/R.49de07c73f3f0aa203dbd9328f9fa4f7?rik=3YkaFfnCwLgdbA&pid=ImgRaw&r=0'
    ]
    misskills=['Marco de trabajo Srping',
      ' Java 17 ',
      ' Angular 17',
      ' SQL Server ',
      ' Mysql ',
      ' html ',
      ' css.',
      ]

      otrashabilidades=['Diseño y administración de sistemas de almacenamiento de datos.',
        ' Uso de paradigma de progamacion POO',
        ' Arquitectura basada en capas',
        ' Micro servicios',
        ' Creacion y consumo de API RESTful  (GET, POST, PUT, DELETE).',
      ]

      hablidadesplus=[
        ' Bootesptrap , Agnular Material',
        ' Photoshop: edicion de imagenes',
        ' Illustrator: vectorizacion de imagenes',
        ' Corel draw: Vectorizacion de imagenes.',


      ]


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
