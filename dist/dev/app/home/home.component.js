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
        this.api.get('/content', '/prestations/per_page/6').subscribe(function (data) { return _this.prestations = data; });
        this.api.get('/content', '/articles/per_page/6').subscribe(function (data) { return _this.articles = data; });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQUN4RSxtRUFBMEQ7QUFXMUQ7SUFhSSx1QkFBbUIsZUFBZ0MsRUFBUyxHQUFlO1FBQXhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFYM0UsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBVWxCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMseUJBQXlCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFFOUYsQ0FBQztJQXZCUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQywrQkFBVSxDQUFDO1NBQzFCLENBQUM7eUNBY3NDLG1DQUFlLEVBQWMsK0JBQVU7T0FibEUsYUFBYSxDQTBCekI7SUFBRCxvQkFBQztDQTFCRCxBQTBCQyxJQUFBO0FBMUJZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXBpc2VydmljZXMubW9kdWxlJztcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2QtaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG5ld05hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBuYW1lczogYW55W10gPSBbXTtcclxuICAgIHByZXN0YXRpb25zOiBhbnlbXTtcclxuICAgIGFydGljbGVzOiBhbnlbXTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxyXG4gICAgICogTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgLSBUaGUgaW5qZWN0ZWQgTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UsIHB1YmxpYyBhcGk6IEFwaVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XHJcbiAgICAgKi9cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBpLmdldCgnL2NvbnRlbnQnLCcvcHJlc3RhdGlvbnMvcGVyX3BhZ2UvNicpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5wcmVzdGF0aW9ucyA9IGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYXBpLmdldCgnL2NvbnRlbnQnLCcvYXJ0aWNsZXMvcGVyX3BhZ2UvNicpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5hcnRpY2xlcyA9IGRhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
