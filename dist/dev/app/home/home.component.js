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
            providers: [apiservices_module_1.ApiService]
        }),
        __metadata("design:paramtypes", [name_list_service_1.NameListService, apiservices_module_1.ApiService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQUN4RSxtRUFBMEQ7QUFVMUQ7SUFhSSx1QkFBbUIsZUFBZ0MsRUFBUyxHQUFlO1FBQXhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFYM0UsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBVWxCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMseUJBQXlCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFFOUYsQ0FBQztJQXZCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQywrQkFBVSxDQUFDO1NBQzFCLENBQUM7eUNBY3NDLG1DQUFlLEVBQWMsK0JBQVU7T0FibEUsYUFBYSxDQTBCekI7SUFBRCxvQkFBQztDQTFCRCxBQTBCQyxJQUFBO0FBMUJZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hcGlzZXJ2aWNlcy5tb2R1bGUnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmV3TmFtZTogc3RyaW5nID0gJyc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbmFtZXM6IGFueVtdID0gW107XG4gICAgcHJlc3RhdGlvbnM6IGFueVtdO1xuICAgIGFydGljbGVzOiBhbnlbXTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAgICogTmFtZUxpc3RTZXJ2aWNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlLCBwdWJsaWMgYXBpOiBBcGlTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcGkuZ2V0KCcvY29udGVudCcsJy9wcmVzdGF0aW9ucy9wZXJfcGFnZS82Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLnByZXN0YXRpb25zID0gZGF0YSk7XG4gICAgICAgIHRoaXMuYXBpLmdldCgnL2NvbnRlbnQnLCcvYXJ0aWNsZXMvcGVyX3BhZ2UvNicpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5hcnRpY2xlcyA9IGRhdGEpO1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==
