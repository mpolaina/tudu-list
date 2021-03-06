import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'tareas', component: TareasComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
