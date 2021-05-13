import { fromEvent, interval, Observer } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

//Permite ejecutar un observable despues de saltar un nro n de emisiones

const observer: Observer<any> = {
    next: value => console.log("Timer " + value),
    error: error => console.log(error),
    complete: () => console.log("Finished timer")
}

const button = document.createElement("button");
button.innerHTML = "Detener timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, "click").pipe(
    tap( () => console.log("Antes del skip")),
    skip(2), //se salta n veces las emisiones
    tap( () => console.log("Despues del skip")),

);

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe(observer);