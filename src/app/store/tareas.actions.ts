import { createAction, props } from '@ngrx/store';
import { Tarea } from '../models/tarea.model';

export const crearTarea = createAction(
  '[Tarea] Crear Tarea',
  props<{ texto: string }>()
);

export const completarTarea = createAction(
  '[Tarea] Completar Tarea',
  props<{ id: number }>()
);

export const borrarTarea = createAction(
  '[Tarea] Borrar Tarea',
  props<{ id: number }>()
)



