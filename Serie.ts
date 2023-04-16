export class Serie {
    id: number;
    nombre: string;
    cadena: string;
    numtemporadas: number;
    descripcion:string;
    paginaWeb: string;
    imagen: string;
  
    constructor(id: number, nombre: string, cadena: string, numtemporadas: number, descripcion:string, paginaWeb: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.cadena = cadena;
        this.numtemporadas = numtemporadas;
        this.descripcion = descripcion;
        this.paginaWeb = paginaWeb;
        this.imagen = imagen;
    }
  }