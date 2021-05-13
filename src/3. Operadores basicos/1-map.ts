import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

//Hace la funcion map similar a la de un array
//en Programacion funcional

//Pipe permite encadenar operadores al observable
//range(1, 10).pipe(
//    map<number, number>(value => value * 10)
//).subscribe(
//    value => console.log(value)
//);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyUp$.pipe(
    map( event => event.key)
).subscribe(
    value => console.log(value)
);