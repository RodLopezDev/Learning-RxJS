import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

//Delay entre emisiones
//Es mejor colocarla al principio del pipe

const click$ = fromEvent<MouseEvent>(document, "click").pipe(
    sampleTime(2000),
    map(({ x, y}) => ({ x, y})),
).subscribe( console.log );