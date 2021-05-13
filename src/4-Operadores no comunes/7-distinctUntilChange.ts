import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

//DISTINCTUNTILCHANGED
//Permite mostrar solo emisiones no repetidas con la emision anterior
const numeros$ = of(1,1,1,1,3,3,3,2,2,1,23,5,6,56,3);
numeros$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

interface Personaje { nombre: String }

const Personajes: Personaje[] = [
    { nombre: "Ash" },
    { nombre: "Misti" },
    { nombre: "Brock" },
    { nombre: "Ash" },
    { nombre: "Ash" },
];

from(Personajes).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre)
).subscribe( console.log );