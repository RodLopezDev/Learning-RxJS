
import { Observable, Observer } from 'rxjs';

//1. Un observable es un objeto que emite un evento que es
//escuchado por otros objetos que esten asociados a este.
const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundillo');

    //Forzar error
    //const aaa = undefined;
    //aaa.nombre = "pruebas";

    subscriber.complete();

    subscriber.next('Mundo');
});

//2. La suscripcion es la manera de asociar objetos para que
//reaccionen a los eventos emitidos por el observable
obs$.subscribe( console.log );

//3. Un observer es una interfaz que refleja la
//observacion de un objeto observable, se puede asignar
//un observer a una suscripcion
const observer$ : Observer<any> = {
    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.log("finished")
}

//4. Trabajando la suscripcion con un observer
obs$.subscribe( observer$ );