import { Observable, Observer, Subject } from 'rxjs';

const MyObserver = (index: number): Observer<any> => {
    const observer$ : Observer<any> = {
        next: value => console.log(`Subs ${index}`, value),
        error: error => console.warn(error),
        complete: () => console.log("finished")
    }
    return observer$;
}

const intervalo$ = new Observable( subscriber => {
    
    const interval = setInterval(() => {
        const random = Math.random() ;
        subscriber.next(random);
        console.log("Intervalo");
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log("Limpiando el observable");
    }
})

//ERROR
//Ambas subscripciones tienen diferentes resutados
//const subscription1 = intervalo$.subscribe( MyObserver(1) );
//const subscription2 = intervalo$.subscribe( MyObserver(2) );


/*
SUBJECT
1- Casteo mùltuple
    Todos los subscriptores reciben la misma emision de datos
2- Es un observer
    
3- Maneja Next, error y complete.
 */
const subject$ = new Subject();
const subscriptionMain$ = intervalo$.subscribe( subject$ );

//Al agregar el subject en la subscripcion estamos encadenando
//observables y con eso los subscriptores finales
//reciben todos el mismo resultado
const subscription1 = subject$.subscribe( MyObserver(1) );
const subscription2 = subject$.subscribe( MyObserver(2) );


/*Cuando la data es producida por el observable en si mismo,
se considera un "cold observable". Pero cuando la data es producida
fuera del observable se llamad "hot observable".

Con subject si enviamos un dato atravez de next o complete,
hacemos que interval$ se vuelva un hot observable.
*/

setTimeout(() => {
    subject$.next(123);
    subject$.complete();
    
    //Ningun observable finaliza sus emisiones a menos que hagamos
    //el unsubscripbe de los subscriptos Ojo
    subscriptionMain$.unsubscribe();
}, 10000);