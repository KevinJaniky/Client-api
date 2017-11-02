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
var name_list_service_1 = require("../shared/name-list/name-list.service");
var apiservices_module_1 = require("../shared/apiservices.module");
var HomeComponent = (function () {
    function HomeComponent(nameListService, api) {
        this.nameListService = nameListService;
        this.api = api;
        this.newName = '';
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get('/prestations?per_page=6').subscribe(function (data) { return _this.prestations = data; });
        this.api.get('/posts?per_page=6').subscribe(function (data) { return _this.articles = data; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            providers: [apiservices_module_1.ApiService]
        }),
        __metadata("design:paramtypes", [name_list_service_1.NameListService, apiservices_module_1.ApiService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBQ2hELDJFQUFzRTtBQUN0RSxtRUFBd0Q7QUFXeEQ7SUFjSSx1QkFBbUIsZUFBZ0MsRUFBUyxHQUFlO1FBQXhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFaM0UsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBV2xCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUF2QlEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUMsK0JBQVUsQ0FBQztTQUMxQixDQUFDO3lDQWVzQyxtQ0FBZSxFQUFjLCtCQUFVO09BZGxFLGFBQWEsQ0EwQnpCO0lBQUQsb0JBQUM7Q0ExQkQsQUEwQkMsSUFBQTtBQTFCWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hbWVMaXN0U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2FwaXNlcnZpY2VzLm1vZHVsZSc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgbmFtZXM6IGFueVtdID0gW107XHJcbiAgICBwcmVzdGF0aW9uczogYW55W107XHJcbiAgICBhcnRpY2xlczogYW55W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXHJcbiAgICAgKiBOYW1lTGlzdFNlcnZpY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSwgcHVibGljIGFwaTogQXBpU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcclxuICAgICAqL1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkuZ2V0KCcvcHJlc3RhdGlvbnM/cGVyX3BhZ2U9NicpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5wcmVzdGF0aW9ucyA9IGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYXBpLmdldCgnL3Bvc3RzP3Blcl9wYWdlPTYnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuYXJ0aWNsZXMgPSBkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
