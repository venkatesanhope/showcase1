(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n<div\n  [@routeAnimations]=\"\n    o && o.activatedRouteData && o.activatedRouteData['animation']\n  \"\n>\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div id=\"news-slider6\" class=\"owl-carousel\">\n        <div class=\"post-slide6\">\n          <div class=\"post-img\">\n            <img src=\"assets/images/attachment-54.jpg\" alt=\"\" />\n          </div>\n          <div class=\"post-review\">\n            <h3 class=\"post-title\"><a href=\"#\">QATARI</a></h3>\n            <p class=\"post-description\">\n              CHOOSE YOUR KANDORA STYLE\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div id=\"news-slider6\" class=\"owl-carousel\">\n        <div class=\"post-slide6\">\n          <div class=\"post-img\">\n            <img src=\"assets/images/attachment-52.jpg\" alt=\"\" />\n          </div>\n          <div class=\"post-review\">\n            <h3 class=\"post-title\"><a routerLink=\"/user\">ARABI</a></h3>\n            <p class=\"post-description\">\n              CHOOSE YOUR KANDORA STYLE\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div id=\"news-slider6\" class=\"owl-carousel\">\n        <div class=\"post-slide6\">\n          <div class=\"post-img\">\n            <img src=\"assets/images/attachment-55.jpg\" alt=\"\" />\n          </div>\n          <div class=\"post-review\">\n            <h3 class=\"post-title\"><a href=\"#\">KUWATI</a></h3>\n            <p class=\"post-description\">\n              CHOOSE YOUR KANDORA STYLE\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loginpage/loginpage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loginpage/loginpage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br /><br />\n<div class=\"container\">\n  <h2 align=\"center\">Login</h2>\n\n  <form action=\"/action_page.php\" class=\"needs-validation\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"uname\">Username:</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"uname\"\n        placeholder=\"Enter username\"\n        name=\"uname\"\n        required\n      />\n      <div class=\"valid-feedback\">Valid.</div>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"pwd\"\n        placeholder=\"Enter password\"\n        name=\"pswd\"\n        required\n      />\n      <div class=\"valid-feedback\">Valid.</div>\n      <div class=\"invalid-feedback\">Please fill out this field.</div>\n    </div>\n    <div class=\"form-group form-check\">\n      <label class=\"form-check-label\">\n        <input\n          class=\"form-check-input\"\n          type=\"checkbox\"\n          name=\"remember\"\n          required\n        />\n        I agree on blabla.\n        <div class=\"valid-feedback\">Valid.</div>\n        <div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n      </label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"font-weight-light\">DESIGN SUMMARY</h4>\n  <img src=\"assets/images/model2.jpg\" width=\"140\" height=\"200\" />\n\n  <table class=\"table table-striped\" style=\"font-size: small\">\n    <thead>\n      <tr>\n        <th>Options</th>\n        <th>Selected</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Fabrics types</td>\n        <td>{{ title }}{{ getser }}</td>\n      </tr>\n      <tr>\n        <td>Collar style</td>\n        <td>{{ collartitle }}{{ getcollar }}</td>\n      </tr>\n      <tr>\n        <td>Stitching</td>\n        <td>Dooley</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topbar/topbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topbar/topbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light bg-company-red shadow-sm p-3 mb-5\"\n>\n  <a class=\"navbar-brand\" routerLink=\"\"\n    ><img src=\"assets/images/logo-eye.png\"\n  /></a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\"\n          >Home <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/loginpage\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user2component/user2component.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user2component/user2component.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div align=\"center\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 \">\n      <h2 class=\"font-weight-light\">CHOOSE COLLAR STYLE AND THICKNESS</h2>\n      <div *ngFor=\"let collarss of collars\">\n        <img\n          class=\"imgc\"\n          (click)=\"myClickcollar('Collar  ' + collarss)\"\n          src=\"assets/images/collar-{{ collarss }}.png\"\n          style=\"width: 140px; height: 180px; margin-right: 30px;\"\n        />\n        <div class=\"caption\">{{ collarName[collarss - 1] }}</div>\n      </div>\n      <br /><br />\n      <button\n        (click)=\"clicklogin($event)\"\n        type=\"button\"\n        class=\"btn btn-primary active\"\n      >\n        Save Your Styles\n      </button>\n    </div>\n    <div class=\"col-sm-4 \">\n      <app-sidebar [collartitle]=\"collarvars\"></app-sidebar>\n      <!--<div id=\"lefthand\"></div>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/usercomponent/usercomponent.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/usercomponent/usercomponent.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Left side column start-->\n\n  <div class=\"col-lg-8 col-sm-8 col-12\" align=\"center\" style=\"top:35px;\">\n    <h2 class=\"font-weight-light\">CHOOSE FABRICS</h2>\n    <ul class=\"nav nav-tabs justify-content-center\">\n      <li class=\"nav-item\" *ngFor=\"let mcnt of count; let i = index\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu{{ i + 1 }}\"\n          >Model-{{ i + 1 }}</a\n        >\n      </li>\n      <!-- tab content start-->\n      <div class=\"tab-content\">\n        <div id=\"menu1\" class=\"container tab-pane active\">\n          <br />\n          <h3>Design-1</h3>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div style=\"padding-left: 2px;\">\n                <img\n                  class=\"imgc\"\n                  *ngFor=\"let countss of count[0]\"\n                  (click)=\"myClickFunction('first  ' + countss)\"\n                  src=\"assets/images/cloth/{{ countss }}.jpg\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"menu2\" class=\"container tab-pane fade\">\n          <br />\n          <h3>Design-2</h3>\n          <div class=\"row\">\n            <div style=\"padding-left: 2px;\">\n              <img\n                class=\"imgc\"\n                *ngFor=\"let countss2 of count[1]\"\n                (click)=\"myClickFunction('second  ' + countss2)\"\n                src=\"assets/images/cloth/{{ countss2 }}.jpg\"\n              />\n            </div>\n          </div>\n        </div>\n        <div id=\"menu3\" class=\"container tab-pane fade\">\n          <br />\n          <h3>Design-3</h3>\n          <div class=\"row\">\n            <div style=\"padding-left: 2px;\">\n              <img\n                class=\"imgc\"\n                *ngFor=\"let countss3 of count[2]\"\n                (click)=\"myClickFunction('Third  ' + countss3)\"\n                src=\"assets/images/cloth/{{ countss3 }}.jpg\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- tab content end-->\n    </ul>\n  </div>\n  <!-- Left side column end-->\n  <!-- Right side column start-->\n  <div class=\"col-lg-4 col-sm-4 col-12 \">\n    <br /><br />\n    <app-sidebar [title]=\"newvars\"></app-sidebar>\n  </div>\n  <!-- Right side column End-->\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = "taylor";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _usercomponent_usercomponent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usercomponent/usercomponent.component */ "./src/app/usercomponent/usercomponent.component.ts");
/* harmony import */ var _user2component_user2component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user2component/user2component.component */ "./src/app/user2component/user2component.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _showservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./showservice.service */ "./src/app/showservice.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__["TopbarComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _usercomponent_usercomponent_component__WEBPACK_IMPORTED_MODULE_9__["UsercomponentComponent"],
            _user2component_user2component_component__WEBPACK_IMPORTED_MODULE_10__["User2componentComponent"],
            _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_11__["LoginpageComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_12__["Approute"])
        ],
        providers: [_showservice_service__WEBPACK_IMPORTED_MODULE_13__["ShowserviceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: Approute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approute", function() { return Approute; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _usercomponent_usercomponent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usercomponent/usercomponent.component */ "./src/app/usercomponent/usercomponent.component.ts");
/* harmony import */ var _user2component_user2component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user2component/user2component.component */ "./src/app/user2component/user2component.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");




const Approute = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    {
        path: "home",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        data: { animation: "Home" }
    },
    {
        path: "user",
        component: _usercomponent_usercomponent_component__WEBPACK_IMPORTED_MODULE_1__["UsercomponentComponent"],
        data: { animation: "user" }
    },
    {
        path: "secondpage",
        component: _user2component_user2component_component__WEBPACK_IMPORTED_MODULE_2__["User2componentComponent"],
        data: { animation: "secondpage" }
    },
    {
        path: "loginpage",
        component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_3__["LoginpageComponent"],
        data: { animation: "loginpage" }
    }
];


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.employees = [];
    }
    ngOnInit() { }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lucGFnZS9sb2dpbnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginpageComponent = class LoginpageComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginpage',
        template: __webpack_require__(/*! raw-loader!./loginpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/loginpage/loginpage.component.html"),
        styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/loginpage/loginpage.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginpageComponent);



/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("loginpage => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "fixed", width: "100%" }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("Home => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "fixed", width: "100%" }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("About => loginpage", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "fixed", width: "100%" }), {
            optional: true
        })
    ])
]);


/***/ }),

/***/ "./src/app/showservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/showservice.service.ts ***!
  \****************************************/
/*! exports provided: ShowserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowserviceService", function() { return ShowserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ShowserviceService = class ShowserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getEmployees() {
        return [
            { id: 1, name: "Andrew", age: "320" },
            { id: 2, name: "venkat", age: "30" },
            { id: 3, name: "param", age: "35" },
            { id: 4, name: "jana", age: "40" }
        ];
    }
};
ShowserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShowserviceService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _showservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showservice.service */ "./src/app/showservice.service.ts");



let SidebarComponent = class SidebarComponent {
    constructor(userservice) {
        this.userservice = userservice;
        this.sidevars = "";
        this.getser = this.userservice.firstvar;
        this.getcollar = this.userservice.secondcollar;
    }
    ngOnInit() {
        //this.sidevars = this.userservice.firstvar;
        //alert(this.sidevars);
    }
    getv() {
        alert("hi");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarComponent.prototype, "collartitle", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sidebar",
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showservice_service__WEBPACK_IMPORTED_MODULE_2__["ShowserviceService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-company-red {\r\n  background-color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbXBhbnktcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopbarComponent = class TopbarComponent {
    constructor() { }
    ngOnInit() { }
};
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-topbar",
        template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/topbar/topbar.component.html"),
        styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TopbarComponent);



/***/ }),

/***/ "./src/app/user2component/user2component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user2component/user2component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caption {\r\n  font-size: 20px;\r\n  color: white;\r\n  text-align: center;\r\n  background-color: #800000;\r\n  width: 230px;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcjJjb21wb25lbnQvdXNlcjJjb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyMmNvbXBvbmVudC91c2VyMmNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMDA7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user2component/user2component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user2component/user2component.component.ts ***!
  \************************************************************/
/*! exports provided: User2componentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User2componentComponent", function() { return User2componentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _showservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../showservice.service */ "./src/app/showservice.service.ts");




let User2componentComponent = class User2componentComponent {
    constructor(userservice, router) {
        this.userservice = userservice;
        this.router = router;
        this.collars = [1, 2];
        this.collarName = ["2.5 Inch", "3.5 Inch"];
        this.collarvars = "";
    }
    myClickcollar(getv) {
        this.collarvars = getv;
        this.userservice.secondcollar = getv;
        // alert(getv);
        // this.router.navigate(["/secondpage"]);
    }
    ngOnInit() { }
    clicklogin(event) {
        this.router.navigate(["/loginpage"]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], User2componentComponent.prototype, "collarNa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], User2componentComponent.prototype, "collartitle", void 0);
User2componentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-user2component",
        template: __webpack_require__(/*! raw-loader!./user2component.component.html */ "./node_modules/raw-loader/index.js!./src/app/user2component/user2component.component.html"),
        styles: [__webpack_require__(/*! ./user2component.component.css */ "./src/app/user2component/user2component.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showservice_service__WEBPACK_IMPORTED_MODULE_3__["ShowserviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], User2componentComponent);



/***/ }),

/***/ "./src/app/usercomponent/usercomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/usercomponent/usercomponent.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgc {\r\n  padding-right: 30px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmNvbXBvbmVudC91c2VyY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmNvbXBvbmVudC91c2VyY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nYyB7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/usercomponent/usercomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/usercomponent/usercomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: UsercomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercomponentComponent", function() { return UsercomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _showservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showservice.service */ "./src/app/showservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let UsercomponentComponent = class UsercomponentComponent {
    constructor(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.count = [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        ];
        this.colorcode = ["", "red", "green", "orange", "blue", "yellow"];
        this.categoryColor = "";
        this.image = "red";
        this.newvars = "";
        // this.router.navigate([pagename, parameter]);
    }
    myClickFunction(getv) {
        this.newvars = getv;
        this.userservice.firstvar = getv;
        this.router.navigate(["/secondpage"]);
    }
    nextmove() {
        this.router.navigate(["/secondpage"]);
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsercomponentComponent.prototype, "title", void 0);
UsercomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-usercomponent",
        template: __webpack_require__(/*! raw-loader!./usercomponent.component.html */ "./node_modules/raw-loader/index.js!./src/app/usercomponent/usercomponent.component.html"),
        styles: [__webpack_require__(/*! ./usercomponent.component.css */ "./src/app/usercomponent/usercomponent.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _showservice_service__WEBPACK_IMPORTED_MODULE_2__["ShowserviceService"]])
], UsercomponentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\mohideen\taylor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map