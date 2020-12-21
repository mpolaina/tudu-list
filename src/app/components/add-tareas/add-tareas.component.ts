import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { crearTarea } from '../../store/tareas.actions';
import { nuevaTareaLista } from '../../store/lista.actions';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-add-tareas',
  templateUrl: './add-tareas.component.html',
  styles: [
  ]
})
export class AddTareasComponent implements OnInit {

  txtInput: FormControl
  @Input() listaMeterTarea
  tareas: Tarea[]

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInput = new FormControl( '', Validators.required )
   }

  ngOnInit(): void {
    this.store.select('tareas').subscribe( resp => this.tareas = resp)
  }

  agregar() {
    if( this.txtInput.invalid ) {return}
    console.log(this.txtInput.value)
    this.store.dispatch( crearTarea( {texto: this.txtInput.value } ))
    this.txtInput.reset()
    localStorage.setItem('tareas', JSON.stringify(this.tareas) )
  }

}
