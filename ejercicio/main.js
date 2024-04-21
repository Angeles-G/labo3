"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clases_1 = require("./clases");
function hacerRectangulo() {
    let vertice1 = new clases_1.Punto(2, 3);
    let vertice3 = new clases_1.Punto(5, 4);
    let rec1 = new clases_1.Rectangulo(vertice1, vertice3);
    document.getElementById("txtRectangulo").value = rec1.ToString();
}
//# sourceMappingURL=main.js.map