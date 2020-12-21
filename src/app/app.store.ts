import { ActionReducerMap } from '@ngrx/store';
import { Tarea } from './models/tarea.model';
import { Lista } from './models/lista.model';
import { listaReducer } from './store/lista.reducer';
import { tareasReducer } from './store/tareas.reducer';


export interface AppState {
   tareas: Tarea[]
   listas: Lista[]
}

export const appReducers: ActionReducerMap<AppState> = {
   tareas: tareasReducer,
   listas: listaReducer,

}
