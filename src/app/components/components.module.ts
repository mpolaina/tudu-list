import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTareasComponent } from './add-tareas/add-tareas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTareasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddTareasComponent
  ]
})
export class ComponentsModule { }
