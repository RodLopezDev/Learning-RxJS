import { fromEvent, Observer, of } from "rxjs";
import { map, takeWhile, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("Observer " + value),
    error: error => console.log(error),
    complete: () => console.log("Finished")
}

//Similar al predicado del first, pero se puede incluir la
//emision que desecandena el complete
const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    tap( console.log ),
    takeWhile(event => event.clientY < 200, true) //Cuando se cumple por primera vez la condicion
);
click$.subscribe(observer);