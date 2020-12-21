import { createAction, props } from '@ngrx/store';
import { Tarea } from '../models/tarea.model';
import { Lista } from '../models/lista.model';

export const crearLista = createAction(
  '[Lista] Crear Lista',
  props<{ nombre: string }>()
);

export const cargarLista = createAction(
  '[Lista] Cargar Lista',
  props<{ lista: Lista }>()
);

export const nuevaTareaLista = createAction(
  '[Lista] Nueva Tarea en Lista',
  props<{ nombre: string, tarea: Tarea }>()
);


