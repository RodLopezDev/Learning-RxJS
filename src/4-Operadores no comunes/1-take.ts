import { Observer, of } from "rxjs";
import { take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("Observer " + value),
    error: error => console.log(error),
    complete: () => console.log("Finished")
}

of(1,2,3,4,5,6,6,4).pipe(
    take(3), //finalizar en el nro de iteraciones definidas
    tap( console.log )
).subscribe(observer);