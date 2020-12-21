
export class Tarea {

  public id: number
  public nombre: string
  public completada: boolean


  constructor( nombre: string, completada: boolean, id?: number ){

    this.id = Math.random()
    this.nombre = nombre
    this.completada= completada

  }

}

