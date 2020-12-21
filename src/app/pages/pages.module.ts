import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { ComponentsModule } from '../components/components.module';
import { ListasComponent } from './listas/listas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    TareasComponent,
    ListasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedModule,
    HomeComponent
  ]
})
export class PagesModule { }
