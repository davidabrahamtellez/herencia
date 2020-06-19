var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Humano = /** @class */ (function () {
    function Humano() {
    }
    Humano.prototype.caminar = function (distancia) {
        console.log("se mueve " + distancia + " metros");
    };
    return Humano;
}());
var niño = /** @class */ (function (_super) {
    __extends(niño, _super);
    function niño() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    niño.prototype.gatea = function () {
        console.log("esta gateando");
    };
    return niño;
}(Humano));
var juan = new niño();
juan.gatea();
juan.caminar(30);
