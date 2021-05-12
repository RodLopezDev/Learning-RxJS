import { of } from 'rxjs';

//const obs$ = of(1, 2, 3, 4, 5, 6);
//const obs$ = of([1, 2], { a: 3, b: 4}, function(){}, Promise.resolve(true));
const obs$ = of<number>(1);

console.log("INicio")
obs$.subscribe( 
    next => console.log(next),
    error => console.log(error),
    () => console.log("Finish")
);
console.log("Fin");