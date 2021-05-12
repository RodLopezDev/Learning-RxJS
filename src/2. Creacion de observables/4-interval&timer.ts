import { interval, Observer, timer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log("Finished")
}

//const interval$ = interval(1000);
const timer$ = timer(1000);
//const timer$ = timer(1000, 1000); //Es un interval que inicio en 1 seg.

console.log("Inicio");
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");