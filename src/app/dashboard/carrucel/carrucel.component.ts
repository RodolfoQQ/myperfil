import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrucel.component.html',
  styleUrl: './carrucel.component.css'
})
export class CarrucelComponent {
  intervalid:any;

  images = [
    '/assets/img/5.jpg.png',

    '/assets/img/12.png'

  ];
  currentIndex = 0;

ngOnInit(): void {
  this.starinterval();

}

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  starinterval(){
    this.intervalid=setInterval(()=>{
      this.next();
    },2000);
  }


  }

