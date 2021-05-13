import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto1:HTMLDivElement = document.createElement("div");
texto1.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt, magna id sollicitudin convallis, nulla nunc vulputate ex, fermentum consequat urna nunc a dolor. Nulla in urna id est sollicitudin ullamcorper. Phasellus dictum purus nisi, a lacinia mauris pulvinar nec. Ut rhoncus placerat tellus, ut rhoncus nisl dignissim id. Nullam gravida quam ut molestie tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas convallis blandit risus sed venenatis. In lacus nisi, elementum a dui eget, commodo ullamcorper mi. Cras lacus lorem, consectetur at orci id, placerat volutpat ante. Duis vitae augue non quam varius efficitur. Phasellus eu eros sit amet sem ultrices mollis. Suspendisse massa justo, aliquam eget accumsan sed, venenatis in sem.
    <br/>
    Donec bibendum est sed lobortis iaculis. Aliquam varius vehicula odio, nec molestie lorem. Ut nunc sem, tempor vel turpis in, convallis bibendum justo. Nam dignissim quis magna nec vestibulum. Morbi lacinia auctor urna. Mauris egestas turpis sed mi maximus dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse in congue ligula. Pellentesque id pellentesque ligula. Proin et tincidunt quam. Nullam in diam nec felis mollis faucibus. Maecenas tempus tortor mollis ligula pharetra, placerat semper elit lacinia. Duis imperdiet sollicitudin varius. Etiam vulputate vitae enim eu congue. Aliquam a scelerisque sapien, vitae vulputate mi.
    <br/>
    Donec vitae nibh a justo vulputate sagittis sit amet posuere urna. Fusce tempor orci quam, vitae congue turpis pretium ac. Curabitur a libero ex. Nullam tempus efficitur purus, et semper ex iaculis vel. Duis et scelerisque nisl. Suspendisse potenti. Nunc sagittis est faucibus, ullamcorper eros quis, euismod dui. Mauris luctus orci sed turpis elementum, vitae rhoncus mi pulvinar. Donec non diam ex. Phasellus elementum tempor lectus, nec suscipit est. Donec imperdiet laoreet velit. Nullam sit amet mi quis augue hendrerit congue. Quisque arcu quam, efficitur laoreet consectetur fermentum, venenatis eu ligula. Proin malesuada enim quis quam porta commodo.
    <br/>
    Mauris at consequat ex. Curabitur in mauris augue. Nulla nec feugiat ante. Curabitur nec eleifend orci. Nulla dictum lobortis sem eu dapibus. Integer sit amet egestas lacus. Nam tempus ultricies lectus. Sed sollicitudin ex eros, nec tristique justo luctus non. Sed non velit ac velit eleifend efficitur sit amet id massa. Proin vel rutrum diam. Quisque ut orci luctus, sodales diam in, sollicitudin mi. Cras at fringilla tortor. Sed nec ipsum suscipit, sagittis eros non, maximus enim. Suspendisse iaculis lorem id diam gravida consequat.
    <br/>
    Nullam massa dui, egestas eget erat quis, cursus ultrices elit. Praesent eu ex dolor. Nulla augue eros, convallis eu imperdiet quis, tempus quis orci. Etiam luctus tempus nibh sed lobortis. Nam eu interdum eros. Cras turpis est, cursus id elementum ac, accumsan ac neque. Sed justo turpis, finibus ac risus sit amet, vulputate lacinia lacus. Proin eu suscipit enim, a pulvinar quam. Pellentesque aliquet lectus quis lorem molestie dictum. Nunc ut imperdiet ante. Donec quis luctus mauris. Duis sollicitudin lorem magna, a vestibulum enim faucibus eget. Cras consectetur orci lacinia mi bibendum ullamcorper. Nulla facilisi. Etiam suscipit viverra dui, in luctus nibh pellentesque ac. Aliquam vel urna maximus, ultrices nulla eget, sagittis mi.
`;

const progressBar = document.createElement('div');
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.width = "0%";
progressBar.style.backgroundColor = "red";

const body1 = document.querySelector('body');
body1.append(texto1);
body1.append(progressBar);

//1
//Creamos funcion para medir porcentaje del scroll
function calclularPorcentaje (event:any) : number {
    const { 
        scrollTop, scrollHeight, clientHeight
    } = event.target.documentElement;
    return ( scrollTop / ( scrollHeight - clientHeight)) * 100;
}

//2
//Nos subscribimos al scroll de la paginma
const scroll$ = fromEvent<Event>(document, 'scroll').pipe(
    map( event => calclularPorcentaje(event) ),
    tap( event => console.log(event)),
);
scroll$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});