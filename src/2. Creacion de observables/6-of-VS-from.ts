import { of, from, Observer, observable } from 'rxjs';

const MyObserver = (index: number): Observer<any> => {
    const observer: Observer<any> = {
        next: value => console.log(`sub ${index}: ${value}`),
        error: error => console.log(error),
        complete: () => console.log("Finished")
    }
    return observer;
}
 
//1
//const source1$ = from([1,2,3,4,5,6]);
//const source2$ = of(...[1,2,3,4,5,6]);

//source1$.subscribe(MyObserver(1));
//source2$.subscribe(MyObserver(2));

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from( miIterable ).subscribe( MyObserver(3) );