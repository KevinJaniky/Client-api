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
        this.api.get('/users').subscribe(function (data) { return _this.articles = data; });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBQ2hELDJFQUFzRTtBQUN0RSxtRUFBd0Q7QUFXeEQ7SUFjSSx1QkFBbUIsZUFBZ0MsRUFBUyxHQUFlO1FBQXhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFaM0UsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBV2xCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFERyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUF4QlEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUMsK0JBQVUsQ0FBQztTQUMxQixDQUFDO3lDQWVzQyxtQ0FBZSxFQUFjLCtCQUFVO09BZGxFLGFBQWEsQ0EyQnpCO0lBQUQsb0JBQUM7Q0EzQkQsQUEyQkMsSUFBQTtBQTNCWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvYXBpc2VydmljZXMubW9kdWxlJztcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBuYW1lczogYW55W10gPSBbXTtcbiAgICBwcmVzdGF0aW9uczogYW55W107XG4gICAgYXJ0aWNsZXM6IGFueVtdO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxuICAgICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgLSBUaGUgaW5qZWN0ZWQgTmFtZUxpc3RTZXJ2aWNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSwgcHVibGljIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vdGhpcy5hcGkuZ2V0KCcvcHJlc3RhdGlvbnM/cGVyX3BhZ2U9NicpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5wcmVzdGF0aW9ucyA9IGRhdGEpO1xuICAgICAgICAvL3RoaXMuYXBpLmdldCgnL3Bvc3RzP3Blcl9wYWdlPTYnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuYXJ0aWNsZXMgPSBkYXRhKTtcbiAgICAgICAgdGhpcy5hcGkuZ2V0KCcvdXNlcnMnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuYXJ0aWNsZXMgPSBkYXRhKTtcbiAgICB9XG5cblxufVxuIl19
