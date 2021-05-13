import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

ajax(url).pipe(
    //map(response => response.response),
    pluck('response'),
    //Controla errores en cualquier emision
    catchError( (err: AjaxError) => {
        //Siempre debe retornar otra observable
        console.warn("Error en", err);
        return of([]);
    })
).subscribe( console.log );