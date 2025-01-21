import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { FooterComponent } from './footer/footer.component';
import { MyselfComponent } from './myself/myself.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NgFor, CarrucelComponent,FooterComponent, MyselfComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  expander:boolean =false
  telf:string='982401884'
  imgs=['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png',
    'https://th.bing.com/th/id/R.5be5fbcb55c0d12f61f03fd603c2ddd2?rik=XRGnhkgM5j9UnA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwhatsapp-hd-png-whatsapp-logo-png-1000.png&ehk=oQrbrzYutw1gKvWMMfOAQIfVxxTgIrC8qo7KFEG2NeE%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.e80048be84cfe35cc89dda88c1fd647c?rik=%2fZ%2bSfqwkbIoLFw&riu=http%3a%2f%2finformaticarobledo.com.ar%2fwp-content%2fuploads%2f2018%2f09%2fInstagram.png&ehk=hXCC%2bObTFXkeTcQtMjnHXCHZmIJS48j6sYLj6I6p7cs%3d&risl=&pid=ImgRaw&r=0'
  ]


 constructor(private router: Router, private activerouter: ActivatedRoute){}

ngOnInit(): void {
  this.gotoMyself()

}

toggleMenu(){
  this.expander = ! this.expander;
  /*setTimeout(()=>{
    this.expander=false
  },2000)*/
  }

 gotoSkills(){
  this.router.navigate(["skills"],{relativeTo:this.activerouter})
}
gotoMyself(){
  this.router.navigate(["myself"],{relativeTo:this.activerouter})
}
gotoProyects(){
  this.router.navigate(["proyects"],{relativeTo:this.activerouter})
}




}

