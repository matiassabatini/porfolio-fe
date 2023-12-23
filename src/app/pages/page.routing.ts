import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";

export const PagesRoutes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
    {
      
      path:'home',
      component:HomeComponent,
      pathMatch:'full'
  
    },
    {
      
      path:'proyectos',
      component:ProyectosComponent,
      pathMatch:'full'
  
    },
  
  
  ];
  

  