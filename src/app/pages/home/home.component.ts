import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { Lista } from '../../models/lista.model';
import { Tarea } from '../../models/tarea.model';
import { completarTarea, borrarTarea } from '../../store/tareas.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  listaMostrar: Lista
  tareas: Tarea[]
  listaSeleccionada: Lista

  marcado: boolean

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('tareas')
        .subscribe( resp => this.tareas = resp)

  }


  check( id: number ){
    this.marcado = !this.marcado
    this.store.dispatch( completarTarea( { id: id } ) )
    this.actualizarLocalStorage()
  }

  borrarTarea( id: number ){
    this.store.dispatch( borrarTarea( { id: id } ))
    this.actualizarLocalStorage()
  }

  actualizarLocalStorage() {
    this.store.select('tareas').subscribe( resp => {
      localStorage.setItem('tareas', JSON.stringify(resp))
    })
  }

}
