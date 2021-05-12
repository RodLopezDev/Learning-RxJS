import { Observable, Observer } from 'rxjs';

const observer$ : Observer<any> = {
    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.log("finished")
}

const intervalo$ = new Observable( subscriber => {

    let i = 0;
    const interval = setInterval(() => {
        i++;
        subscriber.next(i);
    }, 2000);

    //El return funciona como un clean-up del observable
    return () => clearInterval(interval);
});

//Un subscribe retorna una subscripcion
const subscription1 = intervalo$.subscribe(observer$);

//Por cada subscripcion se crea una nueva instancion obserable.
//Ninguna suscripcion comparte el flujo de emisiones con otra
//sunscripcion que salga del .subscribe

setTimeout(() => {
    subscription1.unsubscribe();
    const subscription2 = intervalo$.subscribe(observer$);

    setTimeout(() => {
        subscription2.unsubscribe();
    }, 10000);
}, 5000);