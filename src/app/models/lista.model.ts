import { Tarea } from './tarea.model';

export class Lista {

  public id: number
  public nombre: string
  public tareas: Tarea[]
  public completada: boolean


  constructor( nombre: string, tareas?: Tarea[] ){

    this.id = Math.random()
    this.nombre = nombre
    this.tareas = tareas
    this.completada= false

  }

}

