import { fromEvent, Observer, of } from "rxjs";
import { first, take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("Observer " + value),
    error: error => console.log(error),
    complete: () => console.log("Finished")
}

//Un evento similar pero basico seria el siguiente
//const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
//    take(1)
//);

//Uso avanzado :v
const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    tap( console.log ),
    first<MouseEvent>(event => event.clientY >= 200) //Cuando se cumple por primera vez la condicion
);
click$.subscribe(observer);