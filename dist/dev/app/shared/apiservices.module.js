"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var URL = 'http://localhost/api/wp-json/types';
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'http://localhost:80/api/wp-json/types/content/email';
    }
    ApiService.prototype.get = function (type, path) {
        return this.http.get(URL + type + path)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.postServices = function (data) {
        return this.http.post(this.url, data)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXBpc2VydmljZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsSUFBTSxHQUFHLEdBQUcsb0NBQW9DLENBQUM7QUFHakQ7SUFFSSxvQkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFEN0IsUUFBRyxHQUFXLHFEQUFxRCxDQUFDO0lBQ25DLENBQUM7SUFFbEMsd0JBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQzthQUM5QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELGlDQUFZLEdBQVosVUFBYyxJQUFTO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVhRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtPQUZwQixVQUFVLENBY3RCO0lBQUQsaUJBQUM7Q0FkRCxBQWNDLElBQUE7QUFkWSxnQ0FBVSIsImZpbGUiOiJhcHAvc2hhcmVkL2FwaXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5jb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdC9hcGkvd3AtanNvbi90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuICAgIHVybDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAvYXBpL3dwLWpzb24vdHlwZXMvY29udGVudC9lbWFpbCc7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZ2V0KHR5cGU6IHN0cmluZyxwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChVUkwrdHlwZStwYXRoKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIHBvc3RTZXJ2aWNlcyggZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
