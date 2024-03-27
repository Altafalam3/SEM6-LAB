var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bicycle = /** @class */ (function () {
    function Bicycle(gear, speed) {
        var _this = this;
        this.applyBrake = function () {
            _this.speed -= 5;
            console.log("By Applying brakes the speed will reduce by ".concat(_this.speed));
        };
        this.speedUp = function () {
            _this.speed += 5;
            console.log("By appling accerlators the speed will increase by ".concat(_this.speed));
        };
        this.toString = function () {
            return "Gear :".concat(_this.gear, ",Speed:").concat(_this.speed);
        };
        this.gear = gear;
        this.speed = speed;
    }
    return Bicycle;
}());
var MountainBike = /** @class */ (function (_super) {
    __extends(MountainBike, _super);
    function MountainBike(gear, speed) {
        return _super.call(this, gear, speed) || this;
    }
    return MountainBike;
}(Bicycle));
var mountainBike = new MountainBike(3, 80);
console.log("Initial state:" + mountainBike.toString());
mountainBike.speedUp();
mountainBike.applyBrake();
console.log("Updated state is" + mountainBike.toString());
