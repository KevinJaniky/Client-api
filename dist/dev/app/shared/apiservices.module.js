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
    }
    ApiService.prototype.get = function (type, path) {
        return this.http.get(URL + type + path)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXBpc2VydmljZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsSUFBTSxHQUFHLEdBQUcsb0NBQW9DLENBQUM7QUFHakQ7SUFFSSxvQkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRWxDLHdCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBWTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLElBQUksR0FBQyxJQUFJLENBQUM7YUFDOUIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFQUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBR2dCLFdBQUk7T0FGcEIsVUFBVSxDQVF0QjtJQUFELGlCQUFDO0NBUkQsQUFRQyxJQUFBO0FBUlksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9hcGlzZXJ2aWNlcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmNvbnN0IFVSTCA9ICdodHRwOi8vbG9jYWxob3N0L2FwaS93cC1qc29uL3R5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgZ2V0KHR5cGU6IHN0cmluZyxwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoVVJMK3R5cGUrcGF0aClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbn1cbiJdfQ==
