import { asyncScheduler, range } from 'rxjs';

//const obs$ = range(10, 6);//sincrono
const obs$ = range(10, 6, asyncScheduler); //asincrono

console.log("111");
obs$.subscribe( event => {
    console.log(event);
})
console.log("222");