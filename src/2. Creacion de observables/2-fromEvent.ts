import { fromEvent } from 'rxjs';

//Detectar eventos de nuestro event Target 
//Caso web el event target es document

//Observables
const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer$ = {
    next: value => console.log("next", value)
}

src1$.subscribe((event: MouseEvent) => {
    console.log(event.x)
});
src2$.subscribe((event: KeyboardEvent) => {
    console.log(event.key)
});