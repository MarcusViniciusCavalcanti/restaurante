var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var RestaurantsComponent = (function () {
    function RestaurantsComponent() {
        this.restaurants = [
            {
                id: 'bread-bakery',
                name: 'Bread & Bakery',
                category: 'Bakery',
                deliveryEstimate: '25m',
                rating: 4.9,
                imagePath: 'assets/img/restaurants/breadbakery.png',
            },
            {
                id: 'burger-house',
                name: 'Burger House',
                category: 'Hamburgers',
                deliveryEstimate: '100m',
                rating: 3.5,
                imagePath: 'assets/img/restaurants/burgerhouse.png',
            },
        ];
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map