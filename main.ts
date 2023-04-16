import {Serie} from './Serie.js';
import { series } from './data.js';

let componente: HTMLElement = document.getElementById('series')!;
let componentePromedio: HTMLElement = document.getElementById('promedio')!;

cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;


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
        ${serie.nombre}
    </td>
    <td>
        ${serie.cadena}
    </td>
    <td>
        ${serie.numtemporadas}
    </td>`);
    componente.appendChild(fila);
}

function calcularPromedio(): string{
    let promedio = 0;
    series.forEach(s => promedio += s.numtemporadas);
    promedio /= series.length;
    let promedioT = Math.round(promedio);
    return promedioT.toString();
}