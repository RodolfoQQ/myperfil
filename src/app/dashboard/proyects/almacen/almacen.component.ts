import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {

  proyecto1:string='Gestion de almacen'
  descripcion1:string='Este proyecto consiste en una aplicación web diseñada para la gestión eficiente de inventarios y ubicaciones de productos en almacenes. La aplicación permite visualizar todas las posiciones de los andamios y sus subposiciones, gestionando de manera detallada cada ubicación dentro del almacén.'
  descripcion2:string='Cada ubicación puede contener un producto específico, y la aplicación facilita el traslado de productos entre ubicaciones. Además, incluye una funcionalidad para gestionar un área de almacenamiento donde se listan todos los productos que aún no han sido asignados a una ubicación específica. Esto permite mantener un control actualizado de la ubicación de cada producto dentro del almacén, optimizando la organización y accesibilidad de los productos. '
  items = [
    { image: '/assets/img/13.jpg' },
    { image: '/assets/img/14.jpg' },
    { image: '/assets/img/15.jpg' }
  ];
  currentIndex = 0;

  // Obtiene el estilo de transformación para desplazar el contenedor de imágenes
  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  // Navega a la imagen anterior
  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
  }

  // Navega a la siguiente imagen
  next() {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
  }

  gotogithub(){
    window.open('https://github.com/RodolfoQQ/CasaProAngular.git/','_blank');
  }
}
