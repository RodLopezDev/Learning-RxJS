import { fromEvent, interval, Observer } from "rxjs";
import { takeUntil } from "rxjs/operators";

//Permite ejecutar un observable hasta que otro emite su primer
//event

const observer: Observer<any> = {
    next: value => console.log("Timer " + value),
    error: error => console.log(error),
    complete: () => console.log("Finished timer")
}

const button = document.createElement("button");
button.innerHTML = "Detener timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, "click");

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe(observer);