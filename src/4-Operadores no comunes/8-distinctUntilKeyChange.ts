import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

//DISTINCT
//Permite mostrar solo emisiones no repetidas con la emision anterior
interface Personaje { nombre: String }

const Personajes: Personaje[] = [
    { nombre: "Ash" },
    { nombre: "Misti" },
    { nombre: "Brock" },
    { nombre: "Ash" },
    { nombre: "Ash" },
];

from(Personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe( console.log );