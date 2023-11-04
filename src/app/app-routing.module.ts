import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '', // Ruta raíz
    redirectTo: '/home', // Redirigir a la ruta '/home'
    pathMatch: 'full'
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
