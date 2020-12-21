import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { Lista } from '../../models/lista.model';
import { filter, first, map, takeWhile, tap } from 'rxjs/operators'
import { cargarLista } from '../../store/lista.actions';
import { Tarea } from '../../models/tarea.model';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styles: [
  ]
})
export class ListasComponent implements OnInit {

  listas: Lista[] = []
  lista: Lista

  @Output() listaSelect: EventEmitter<Lista> = new EventEmitter();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('listas').subscribe( resp => {
      this.listas = resp
      console.log(this.listas)
    })

  }

  cargarTareas( id: number ) {
    this.store.select('listas')
    .pipe(
      map( resp => resp.filter( lista => lista.id === id ))
    )
    .subscribe( resp => {
        console.log(this.lista)
        this.lista = resp[0]
        console.log('thisLista: ',this.lista.id)
        this.listaSelect.emit( this.lista )
        // this.listaSelect.emit( this.lista.id )
      }
    )





    this.store.dispatch( cargarLista( {lista: this.lista }))

  }

  // emitir(){
  //   this.listaSelect.emit( this.lista )
  // }

}
