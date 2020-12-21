import { createReducer, on } from '@ngrx/store';
import { crearTarea, completarTarea, borrarTarea } from './tareas.actions';
import { Tarea } from '../models/tarea.model';


export const initialState: Tarea[] = (

  JSON.parse(localStorage.getItem('tareas')) || []

)


const _tareasReducer = createReducer(initialState,

    on( crearTarea, (state, { texto }) => [...state, new Tarea( texto, false )]),
    on( borrarTarea, (state, { id }) => state.filter( tarea => tarea.id !== id )),
    on( completarTarea, (state, {id}) => {
      return state.map( tarea => {
        if( tarea.id === id ){
          return { ...tarea, completada: !tarea.completada }
        } else {
          return tarea
        }
      })
    })


);

export function tareasReducer(state, action) {
    return _tareasReducer(state, action);
}
