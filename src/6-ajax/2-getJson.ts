import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': "application/json",
    'My-token': "dsadsdsad32d2",
});
obs$.subscribe(data => console.log("data: ", data) );