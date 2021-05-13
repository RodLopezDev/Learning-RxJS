import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

//Hace la funcion filter similar a la de un arreglo

range(1, 10).pipe(
    filter((value, index) => value % 2 === 1)
).subscribe(
    value => console.log(value)
);
