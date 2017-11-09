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
var apiservices_module_1 = require("../shared/apiservices.module");
var AboutComponent = (function () {
    function AboutComponent(api) {
        this.api = api;
        this.abouts = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get('/content', '/about').subscribe(function (data) { return _this.abouts = data; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css'],
            providers: [apiservices_module_1.ApiService]
        }),
        __metadata("design:paramtypes", [apiservices_module_1.ApiService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFFbEQsbUVBQTBEO0FBWTFEO0lBR0Usd0JBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBRGxDLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFDbUIsQ0FBQztJQUVyQyxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFEQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBVFUsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsU0FBUyxFQUFFLENBQUMsK0JBQVUsQ0FBQztTQUN4QixDQUFDO3lDQUl3QiwrQkFBVTtPQUh2QixjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FYRCxBQVdDLElBQUE7QUFYWSx3Q0FBYyIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICxPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hcGlzZXJ2aWNlcy5tb2R1bGUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBhYm91dHM6IGFueSA9IFtdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpOiBBcGlTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy90aGlzLmFwaS5nZXQoJy9wcmVzdGF0aW9ucz9wZXJfcGFnZT02Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLnByZXN0YXRpb25zID0gZGF0YSk7XG4gICAgLy90aGlzLmFwaS5nZXQoJy9wb3N0cz9wZXJfcGFnZT02Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmFydGljbGVzID0gZGF0YSk7XG4gICAgdGhpcy5hcGkuZ2V0KCcvY29udGVudCcsJy9hYm91dCcpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5hYm91dHMgPSBkYXRhKTtcbiAgfVxuXG59XG4iXX0=
