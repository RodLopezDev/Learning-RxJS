import { from, fromEvent, interval, Observer, of } from "rxjs";
import { distinct, skip, takeUntil, tap } from "rxjs/operators";

//DISTINCT
//Permite mostrar solo emisiones no repetidas
const numeros$ = of(1,1,1,1,3,3,3,2,2,1,23,5,6,56);
numeros$.pipe(
    distinct()
).subscribe( console.log );

interface Personaje { nombre: String }

const Personajes: Personaje[] = [
    { nombre: "Ash" },
    { nombre: "Misti" },
    { nombre: "Brock" },
    { nombre: "Ash" },
];

from(Personajes).pipe(
    distinct((e:Personaje) => e.nombre )
).subscribe( console.log );