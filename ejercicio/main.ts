import {Punto, Rectangulo} from "./clases";

function hacerRectangulo(): void{
    let vertice1 = new Punto(2,3);
    let vertice3 = new Punto(5,4);
    let rec1 = new Rectangulo( vertice1, vertice3 );
    //console.log(rec1.ToString());
    (<HTMLInputElement>  document.getElementById("txtRectangulo")).value = rec1.ToString();
}








