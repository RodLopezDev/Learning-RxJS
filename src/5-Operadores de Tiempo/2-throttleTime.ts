import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";

//genera un delay de segundo T donde se ignora 
//todas las emisiones que ocurran dentro del delay

//Lo opuesto al debounceTime

const input = document.createElement("input");
document.querySelector("body").append(input);

//Modo normal
//const input$ = fromEvent(document, "keyup").pipe(
//    throttleTime(500),
//    pluck("target", "value")
//).subscribe( console.log );

//Obtener el primero y el ultimo
const input$ = fromEvent(document, "keyup").pipe(
    throttleTime(4000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck("target", "value"),
    distinctUntilChanged()
).subscribe( console.log );