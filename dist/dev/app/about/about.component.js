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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFFbEQsbUVBQTBEO0FBWTFEO0lBR0Usd0JBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBRGxDLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFDbUIsQ0FBQztJQUVyQyxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFEQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBVFUsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsU0FBUyxFQUFFLENBQUMsK0JBQVUsQ0FBQztTQUN4QixDQUFDO3lDQUl3QiwrQkFBVTtPQUh2QixjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FYRCxBQVdDLElBQUE7QUFYWSx3Q0FBYyIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICxPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXBpc2VydmljZXMubW9kdWxlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIGFib3V0czogYW55ID0gW107XHJcbiAgY29uc3RydWN0b3IocHVibGljIGFwaTogQXBpU2VydmljZSl7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vdGhpcy5hcGkuZ2V0KCcvcHJlc3RhdGlvbnM/cGVyX3BhZ2U9NicpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5wcmVzdGF0aW9ucyA9IGRhdGEpO1xyXG4gICAgLy90aGlzLmFwaS5nZXQoJy9wb3N0cz9wZXJfcGFnZT02Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmFydGljbGVzID0gZGF0YSk7XHJcbiAgICB0aGlzLmFwaS5nZXQoJy9jb250ZW50JywnL2Fib3V0Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmFib3V0cyA9IGRhdGEpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
