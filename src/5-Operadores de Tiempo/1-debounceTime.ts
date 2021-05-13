import { fromEvent } from "rxjs";
import { debounceTime, pluck } from "rxjs/operators";

//Se ejecuta en cuanto pasa el tiempo t desde 
//la ultima emision

//Permite contener el nro de ejecuciones
//Tomando solo la ultima

//const click$  = fromEvent(document, "click").pipe(
//    debounceTime(1000)
//).subscribe( console.log );

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(document, "keyup").pipe(
    debounceTime(500),
    pluck("target", "value")
).subscribe( console.log );