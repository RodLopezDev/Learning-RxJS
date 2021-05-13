import { fromEvent, interval } from "rxjs";
import { map, sample, sampleTime } from "rxjs/operators";

//Sincroniza 2 observables
//El segundo es el que gatilla la muestra de emisiones del primero

const interval$ = interval(1000);
const click$ = fromEvent<MouseEvent>(document, "click");

interval$.pipe(
    sample( click$ )
).subscribe( console.log );