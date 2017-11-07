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
        this.api.get('/content', '/about').subscribe(function (data) { return _this.articles = data; });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQUN4RSxtRUFBMEQ7QUFXMUQ7SUFjSSx1QkFBbUIsZUFBZ0MsRUFBUyxHQUFlO1FBQXhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFaM0UsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBV2xCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFERyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBeEJRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLCtCQUFVLENBQUM7U0FDMUIsQ0FBQzt5Q0Flc0MsbUNBQWUsRUFBYywrQkFBVTtPQWRsRSxhQUFhLENBMkJ6QjtJQUFELG9CQUFDO0NBM0JELEFBMkJDLElBQUE7QUEzQlksc0NBQWEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FwaXNlcnZpY2VzLm1vZHVsZSc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmV3TmFtZTogc3RyaW5nID0gJyc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbmFtZXM6IGFueVtdID0gW107XG4gICAgcHJlc3RhdGlvbnM6IGFueVtdO1xuICAgIGFydGljbGVzOiBhbnlbXTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIEhvbWVDb21wb25lbnQgd2l0aCB0aGUgaW5qZWN0ZWRcbiAgICAgKiBOYW1lTGlzdFNlcnZpY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05hbWVMaXN0U2VydmljZX0gbmFtZUxpc3RTZXJ2aWNlIC0gVGhlIGluamVjdGVkIE5hbWVMaXN0U2VydmljZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UsIHB1YmxpYyBhcGk6IEFwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5hbWVzIE9uSW5pdFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL3RoaXMuYXBpLmdldCgnL3ByZXN0YXRpb25zP3Blcl9wYWdlPTYnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMucHJlc3RhdGlvbnMgPSBkYXRhKTtcbiAgICAgICAgLy90aGlzLmFwaS5nZXQoJy9wb3N0cz9wZXJfcGFnZT02Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmFydGljbGVzID0gZGF0YSk7XG4gICAgICAgIHRoaXMuYXBpLmdldCgnL2NvbnRlbnQnLCcvYWJvdXQnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuYXJ0aWNsZXMgPSBkYXRhKTtcbiAgICB9XG5cblxufVxuIl19
