"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var about_module_1 = require("./about/about.module");
var home_module_1 = require("./home/home.module");
var blog_module_1 = require("./blog/blog.module");
var shared_module_1 = require("./shared/shared.module");
var blog_page_module_1 = require("./blog-page/blog-page.module");
var ventes_module_1 = require("./ventes/ventes.module");
var contact_module_1 = require("./contact/contact.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, about_module_1.AboutModule, home_module_1.HomeModule, blog_module_1.BlogModule, blog_page_module_1.BlogPageModule, ventes_module_1.VentesModule, contact_module_1.ContactModule, shared_module_1.SharedModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsc0NBQTJDO0FBQzNDLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCxrREFBZ0Q7QUFDaEQsd0RBQXNEO0FBQ3RELGlFQUE0RDtBQUM1RCx3REFBb0Q7QUFDcEQsMkRBQXVEO0FBYXZEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFWckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxpQkFBVSxFQUFFLHFDQUFnQixFQUFFLDBCQUFXLEVBQUUsd0JBQVUsRUFBRSx3QkFBVSxFQUFFLGlDQUFjLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxFQUFFLDRCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEssWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUExQixBQUEwQixJQUFBO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBBYm91dE1vZHVsZSB9IGZyb20gJy4vYWJvdXQvYWJvdXQubW9kdWxlJztcclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJsb2dNb2R1bGUgfSBmcm9tICcuL2Jsb2cvYmxvZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHtCbG9nUGFnZU1vZHVsZX0gZnJvbSBcIi4vYmxvZy1wYWdlL2Jsb2ctcGFnZS5tb2R1bGVcIjtcclxuaW1wb3J0IHtWZW50ZXNNb2R1bGV9IGZyb20gXCIuL3ZlbnRlcy92ZW50ZXMubW9kdWxlXCI7XHJcbmltcG9ydCB7Q29udGFjdE1vZHVsZX0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0Lm1vZHVsZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGUsIEFib3V0TW9kdWxlLCBIb21lTW9kdWxlLCBCbG9nTW9kdWxlLCBCbG9nUGFnZU1vZHVsZSwgVmVudGVzTW9kdWxlLCBDb250YWN0TW9kdWxlLCBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcbiAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcclxuICB9XSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
