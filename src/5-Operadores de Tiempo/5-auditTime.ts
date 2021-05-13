import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

//Obtiene el ultimo valor durante un tiempo

const click$ = fromEvent<MouseEvent>(document, "click");
click$.pipe(
    map(({ x } ) => ({ x })),
    tap(val => console.log('tap', val)),
    auditTime(2000),
).subscribe( console.log );