import {Serie} from './Serie.js';
import { series } from './data.js';

let componente: HTMLElement = document.getElementById('series')!;
let componentePromedio: HTMLElement = document.getElementById('promedio')!;
let foto:HTMLElement = document.getElementById('imagen')!;
let titulo:HTMLElement = document.getElementById('titulo')!;
let descripcion: HTMLElement = document.getElementById('descripcion')!;
let paginaWeb: HTMLElement = document.getElementById('paginaWeb')!;

cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;
createBotones();


function cargarFilas(): void{
    series.forEach(c => crearFila(c));
}

function crearFila(serie: Serie):void{
    let fila = document.createElement('tr');
    fila.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde;">
        <a id = "${serie.id}">${serie.nombre}</a>
    </td>
    <td>
        ${serie.cadena}
    </td>
    <td>
        ${serie.numtemporadas}
    </td>`);
    componente.appendChild(fila);
}

function alterCard(id: string){
    let idR: number = parseInt(id);
    let serie: Serie = series[idR - 1];
    foto.setAttribute('src', serie.imagen);
    titulo.innerHTML = `${serie.nombre}`;
    descripcion.innerHTML = `${serie.descripcion}`;
    paginaWeb.setAttribute('href', `${serie.paginaWeb}`);
    paginaWeb.innerHTML = 'Página Web Serie';
    const card = document.querySelector('.card');
    if (card && card.classList.contains('card')) {
    (card as HTMLElement).style.display = 'block';
    }

}


function createBotones(){
    series.forEach(c=>{
        let boton = document.getElementById(`${c.id}`)!;
        boton.onclick = () => {alterCard(boton.id)};
    });
}

function calcularPromedio(): string{
    let promedio = 0;
    series.forEach(s => promedio += s.numtemporadas);
    promedio /= series.length;
    let promedioT = Math.round(promedio);
    return promedioT.toString();
}