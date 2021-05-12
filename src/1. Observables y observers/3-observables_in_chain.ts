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
const subscription2 = intervalo$.subscribe(observer$);
const subscription3 = intervalo$.subscribe(observer$);

subscription1.add(subscription2)
            .add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    console.log("Completed timeout");
}, 5000);