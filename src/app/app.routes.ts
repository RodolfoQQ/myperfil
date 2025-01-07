import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyselfComponent } from './dashboard/myself/myself.component';
import { AlmacenComponent } from './dashboard/proyects/almacen/almacen.component';
import { HorarioComponent } from './dashboard/proyects/horario/horario.component';
import { ProyectsComponent } from './dashboard/proyects/proyects.component';
import { SkillsComponent } from './dashboard/skills/skills.component';

export const routes: Routes = [
  {path:'dashboard',component: DashboardComponent,
    children  :[
      {path:'skills',component: SkillsComponent},
      {path:'myself', component:MyselfComponent},
      {path:'proyects',component:ProyectsComponent,children:[
        {path:'almacen',component:AlmacenComponent},
        {path:'horario',component:HorarioComponent},// esto es donde se muestra el boton  no es un recurso relacionado al rpoblema
      ]}
    ]
  },
  {path:'', redirectTo:'dashboard',pathMatch:'full'}
];
