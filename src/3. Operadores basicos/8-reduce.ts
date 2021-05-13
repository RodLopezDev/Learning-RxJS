import { interval, Observer } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

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
    reduce( totalReducer, 5 ) //retorna el total de las antiguas iteraciones
).subscribe(observer);