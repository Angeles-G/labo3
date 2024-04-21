define("clases", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rectangulo = exports.Punto = void 0;
    var Punto = /** @class */ (function () {
        function Punto(_x, _y) {
            this._x = _x;
            this._y = _y;
        }
        Object.defineProperty(Punto.prototype, "GetX", {
            get: function () {
                return this._x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Punto.prototype, "GetY", {
            get: function () {
                return this._y;
            },
            enumerable: false,
            configurable: true
        });
        return Punto;
    }());
    exports.Punto = Punto;
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(_vertice1, _vertice3) {
            this._vertice1 = _vertice1;
            this._vertice3 = _vertice3;
            this._vertice2 = new Punto(_vertice1.GetX, _vertice3.GetY);
            this._vertice4 = new Punto(_vertice3.GetX, _vertice1.GetY);
            this._ladoUno = _vertice3.GetX - _vertice1.GetX;
            this._ladoDos = _vertice3.GetY - _vertice1.GetY;
            this._perimetro = this._ladoDos * 2 + this._ladoUno * 2;
            this._area = this._ladoUno * this._ladoDos;
        }
        Object.defineProperty(Rectangulo.prototype, "GetArea", {
            get: function () {
                return this._area;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rectangulo.prototype, "GetPerimetro", {
            get: function () {
                return this._perimetro;
            },
            enumerable: false,
            configurable: true
        });
        Rectangulo.prototype.ToString = function () {
            return (" El vertice uno esta en x: " + this._vertice1.GetX + " y: " + this._vertice1.GetY + "\n" +
                " El vertice dos esta en x: " + this._vertice2.GetX + " y: " + this._vertice2.GetY + "\n" +
                " El vertice tres esta en x: " + this._vertice3.GetX + " y: " + this._vertice3.GetY + "\n" +
                " El vertice cuatro esta en x: " + this._vertice4.GetX + " y: " + this._vertice4.GetY + "\n" +
                " El perimetro es: " + this._perimetro + "\n" +
                " El area es: " + this._area + "\n" +
                " Uno de los lados mide " + this._ladoUno + "\n" +
                " El otro lado mide " + this._ladoDos);
        };
        return Rectangulo;
    }());
    exports.Rectangulo = Rectangulo;
});
define("main", ["require", "exports", "clases"], function (require, exports, clases_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hacerRectangulo() {
        var vertice1 = new clases_1.Punto(2, 3);
        var vertice3 = new clases_1.Punto(5, 4);
        var rec1 = new clases_1.Rectangulo(vertice1, vertice3);
        //console.log(rec1.ToString());
        document.getElementById("txtRectangulo").value = rec1.ToString();
    }
});
