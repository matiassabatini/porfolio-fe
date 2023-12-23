import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TemplateComponent } from './template/template.component';
import {  PagesRoutes } from './pages/page.routing';

const routes: Routes = [
    
  {
    path: '', // Ruta raíz
    component: TemplateComponent,
    pathMatch: 'full',children:PagesRoutes
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
