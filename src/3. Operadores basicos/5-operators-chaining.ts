import { fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyUp$.pipe(
    map((value:KeyboardEvent) => value.code),
    filter(value => value === "Enter"),
    mapTo("Presionaste enter"),
).subscribe(
    value => console.log(value)
);