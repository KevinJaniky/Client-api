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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXBpc2VydmljZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsSUFBTSxHQUFHLEdBQUcsb0NBQW9DLENBQUM7QUFHakQ7SUFFSSxvQkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFEN0IsUUFBRyxHQUFXLHFEQUFxRCxDQUFDO0lBQ25DLENBQUM7SUFFbEMsd0JBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQzthQUM5QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELGlDQUFZLEdBQVosVUFBYyxJQUFTO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVhRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtPQUZwQixVQUFVLENBY3RCO0lBQUQsaUJBQUM7Q0FkRCxBQWNDLElBQUE7QUFkWSxnQ0FBVSIsImZpbGUiOiJhcHAvc2hhcmVkL2FwaXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL3dwLWpzb24vdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gICAgdXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo4MC9hcGkvd3AtanNvbi90eXBlcy9jb250ZW50L2VtYWlsJztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXQodHlwZTogc3RyaW5nLHBhdGg6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChVUkwrdHlwZStwYXRoKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuICAgIHBvc3RTZXJ2aWNlcyggZGF0YTogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCwgZGF0YSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuXG59XG4iXX0=
