import { asyncScheduler } from 'rxjs';

//No genera un observable, genera una subscripcion

//1
//const saludar = () => console.log("Hola mundo");
//asyncScheduler.schedule(saludar, 2000);

//2
//const saludar = (nombre) => console.log("Hola mundo " + nombre);
//asyncScheduler.schedule(saludar, 2000, "HOla");

//3
//La funcion scheduleAction no puede ser arroyFunction
const asyncF = asyncScheduler.schedule(function(state) {
console.log(state);
    this.schedule(state + 1, 2000);
}, 2000, 20);

//El clean-up del primer schedule
asyncScheduler.schedule(function() {
    asyncF.unsubscribe();
}, 10000);