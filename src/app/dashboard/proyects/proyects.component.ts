import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, AppComponent, RouterOutlet],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {


constructor(private router:Router, private activateroute:ActivatedRoute){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.gotoHorarios()
}

  gotoAlmacen(){
    this.router.navigate(["almacen"],{relativeTo:this.activateroute})
  }
  gotoHorarios(){
      this.router.navigate(["horario"],{relativeTo:this.activateroute})
  }

}
