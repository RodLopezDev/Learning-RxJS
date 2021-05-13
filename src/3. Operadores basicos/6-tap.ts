import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

//Genera un segundo trigger para ocasionar efectos
//secundarios en cada emision

//Se puede utilizar para depurar en el flujo del pipe

const numeros$ = range(1, 5).pipe(
    tap(x => console.log('antes', x)),
    map(value => value * 10),
    tap(x => console.log('despues', x)),
    map(value => value * 10),
    tap(x => console.log('finalmente', x)),
);

numeros$.subscribe(value => console.log('Subs', value));