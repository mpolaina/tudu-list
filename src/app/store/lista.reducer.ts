import { createReducer, on } from '@ngrx/store';
import { Lista } from '../models/lista.model';
import { crearLista, cargarLista, nuevaTareaLista } from './lista.actions';
import { Tarea } from '../models/tarea.model';
import { ListasComponent } from '../pages/listas/listas.component';


export const initialState: Lista[] = [
    // new Lista('Trabajo', [ {nombre: 'hola', id: 0, completada: false}]),
  // new Lista('Casa', []),
  ]



const _listaReducer = createReducer(initialState,

    // on( crearLista, (state, { nombre }) =>  [ ...state, new Lista(nombre, []) ] ),
    on( nuevaTareaLista, (state, { nombre, tarea }) => {
        return {
            ...state,
            lista: new Lista( nombre, [new Tarea( nombre , false )] )
        }
    })

)

export function listaReducer(state, action) {
    return _listaReducer(state, action);
}
