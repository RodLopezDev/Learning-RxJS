import { fromEvent, range } from 'rxjs';
import { mapTo } from 'rxjs/operators';

//Hace la funcion filter para retornar un valor fijo
//del evento

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyUp$.pipe(
    mapTo( 'key pressed' )
).subscribe(
    value => console.log(value)
);