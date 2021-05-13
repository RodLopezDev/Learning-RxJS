import { interval, Observer } from "rxjs";
import { scan, take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("Observer " + value),
    error: error => console.log(error),
    complete: () => console.log("Finished")
}

const totalReducer = (acumulator: number, valorActual: number) :number => {
    return acumulator + valorActual;
}

interval(1000).pipe(
    take(4), //finalizar en el nro de iteraciones definidas
    tap( console.log ),
    scan( totalReducer, 5 ) //retorna el valor acumulado, pero en cada iteracion y no al final como el reduce
).subscribe(observer);