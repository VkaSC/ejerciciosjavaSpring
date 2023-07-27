"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/formulario/formulario.component */ 9522);
/* harmony import */ var _components_restaurantes_restaurantes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/restaurantes/restaurantes.component */ 269);
/* harmony import */ var _components_perro_perro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/perro/perro.component */ 6855);
/* harmony import */ var _components_adivina_adivina_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/adivina/adivina.component */ 2952);
/* harmony import */ var _components_dni_dni_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dni/dni.component */ 10);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_frase_frase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/frase/frase.component */ 5541);
/* harmony import */ var _components_imc_imc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/imc/imc.component */ 3311);
/* harmony import */ var _components_chuck_chuck_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chuck/chuck.component */ 3088);
/* harmony import */ var _components_restaurantesnpag_restaurantesnpag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/restaurantesnpag/restaurantesnpag.component */ 9038);
/* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ 6976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);













const routes = [{
  path: 'dni',
  component: _components_dni_dni_component__WEBPACK_IMPORTED_MODULE_4__.DniComponent
}, {
  path: 'adivina',
  component: _components_adivina_adivina_component__WEBPACK_IMPORTED_MODULE_3__.AdivinaComponent
}, {
  path: 'perros',
  component: _components_perro_perro_component__WEBPACK_IMPORTED_MODULE_2__.PerroComponent
}, {
  path: 'frase',
  component: _components_frase_frase_component__WEBPACK_IMPORTED_MODULE_5__.FraseComponent
}, {
  path: 'imc',
  component: _components_imc_imc_component__WEBPACK_IMPORTED_MODULE_6__.ImcComponent
}, {
  path: 'chuck',
  component: _components_chuck_chuck_component__WEBPACK_IMPORTED_MODULE_7__.ChuckComponent
}, {
  path: 'restaurantes',
  component: _components_restaurantes_restaurantes_component__WEBPACK_IMPORTED_MODULE_1__.RestaurantesComponent
}, {
  path: 'restaurantes/alta',
  component: _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_0__.FormularioComponent
}, {
  path: 'restaurantepag',
  component: _components_restaurantesnpag_restaurantesnpag_component__WEBPACK_IMPORTED_MODULE_8__.RestaurantesnpagComponent
}, {
  path: 'busqueda',
  component: _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_9__.BusquedaComponent
}, {
  path: "**",
  redirectTo: "/"
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, {
    useHash: false
  }), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'my-app';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 38,
  vars: 0,
  consts: [[1, "navbar", "navbar-expand-lg", "bg-body-secondary", "bg-primary", "navbar-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["width", "40", "alt", "Angular Logo", "src", "../assets/logo.png"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/adivina", 1, "nav-link"], ["routerLink", "/dni", 1, "nav-link"], ["routerLink", "perros", 1, "nav-link"], ["routerLink", "frase", 1, "nav-link"], ["routerLink", "imc", 1, "nav-link"], ["routerLink", "/chuck", 1, "nav-link"], ["routerLink", "/restaurantes", 1, "nav-link"], ["routerLink", "/restaurantepag", 1, "nav-link"], ["routerLink", "/busqueda", 1, "nav-link"], [1, "container", "my-4"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MALAGA ANGULAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ADIVINA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DNI");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PERROS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8)(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FRASE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8)(22, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IMC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8)(25, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CHUCK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8)(28, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "RESTAURANTES");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8)(31, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "RESTAURANTES PAGINACI\u00D3N");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 8)(34, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "BUSCAR RESTAURANTES");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\n\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n  all: unset;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgb(105, 103, 103);\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\n\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: rgb(15, 15, 16);\n}\n\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\\2022 \\2022 \\2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: rgb(58, 58, 58);\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTsrRUFDNkU7RUFDN0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixnRUFBZ0U7RUFDaEUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdFQUFnRTtFQUNoRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLFxyXG4gICAgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b29sYmFyIGltZyB7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjeW91dHViZS1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIsXHJcbi50b29sYmFyICN5b3V0dWJlLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiAjODg4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBhbGw6IHVuc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxODBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICBjb2xvcjogI2MyYzNjNDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIHRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgY29sb3I6ICMyNDI5MmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAtMTYwcHg7XHJcbiAgbGVmdDogLTIzMHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxuICB3aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_adivina_adivina_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/adivina/adivina.component */ 2952);
/* harmony import */ var _components_perro_perro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/perro/perro.component */ 6855);
/* harmony import */ var _components_dni_dni_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dni/dni.component */ 10);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_frase_frase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/frase/frase.component */ 5541);
/* harmony import */ var _components_imc_imc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/imc/imc.component */ 3311);
/* harmony import */ var _components_chuck_chuck_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chuck/chuck.component */ 3088);
/* harmony import */ var angular_cd_timer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-cd-timer */ 4490);
/* harmony import */ var _components_restaurantes_restaurantes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/restaurantes/restaurantes.component */ 269);
/* harmony import */ var _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/formulario/formulario.component */ 9522);
/* harmony import */ var _components_restaurantesnpag_restaurantesnpag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/restaurantesnpag/restaurantesnpag.component */ 9038);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ 6976);
/* harmony import */ var _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mapa/mapa.component */ 6851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);




















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, angular_cd_timer__WEBPACK_IMPORTED_MODULE_17__.CdTimerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_adivina_adivina_component__WEBPACK_IMPORTED_MODULE_2__.AdivinaComponent, _components_perro_perro_component__WEBPACK_IMPORTED_MODULE_3__.PerroComponent, _components_dni_dni_component__WEBPACK_IMPORTED_MODULE_4__.DniComponent, _components_frase_frase_component__WEBPACK_IMPORTED_MODULE_5__.FraseComponent, _components_imc_imc_component__WEBPACK_IMPORTED_MODULE_6__.ImcComponent, _components_chuck_chuck_component__WEBPACK_IMPORTED_MODULE_7__.ChuckComponent, _components_restaurantes_restaurantes_component__WEBPACK_IMPORTED_MODULE_8__.RestaurantesComponent, _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__.FormularioComponent, _components_restaurantesnpag_restaurantesnpag_component__WEBPACK_IMPORTED_MODULE_10__.RestaurantesnpagComponent, _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_11__.BusquedaComponent, _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_12__.MapaComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, angular_cd_timer__WEBPACK_IMPORTED_MODULE_17__.CdTimerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule]
  });
})();

/***/ }),

/***/ 2952:
/*!*********************************************************!*\
  !*** ./src/app/components/adivina/adivina.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdivinaComponent: () => (/* binding */ AdivinaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var angular_cd_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-cd-timer */ 4490);



const _c0 = ["basicTimer"];
class AdivinaComponent {
  /**
   *
   * HACED UNA APP DONDE EL PROGRAMA
   * PIENSE UN NÚMERO DEL 1 AL 100
   *
   * EL USUARIO, TENDRÁ 5 INTENTOS PARA AVERIGÜAR el
   * NÚMERO PENSADO POR LA MÁQUINA
   *
   * POR CADA INTENTO, SI FALLA, LE DEBEMOS DAR UNA PISTA
   * Y DECIRLE SI EL NÚMERO INTRODUCIDO ES
   * MENOR O MAYOR QUE EL BUSCADO
   *
   * SI ACIERTA, PUES LE DAMOS LA ENHORABUENA
   * SI SUPERA LOS 5 INTENTOS, PUES LE DECIMOS
   * QUE HA PERDIDO Y LA SOLUCIÓN
   */
  constructor() {
    console.log('Estoy en el constructor');
    this.titulo = 'Adivina un número en 5 intentos';
    this.numeroUsuario = 0;
    this.numeroBuscado = this.calcularNumeroAleatorioDe1A100();
    console.log('numero a adivinar ' + this.numeroBuscado);
    this.contador = 5;
    this.finPartida = false;
  }
  ngOnInit() {
    //throw new Error('Method not implemented.');
    console.log('Estoy en OnInit');
  }
  calcularNumeroAleatorioDe1A100() {
    let numeroGenerado = 0;
    numeroGenerado = Math.floor(Math.random() * 100 + 1);
    return numeroGenerado;
  }
  comprobarIntento() {
    console.log('Comprobando intent0...');
    console.log(this.numeroUsuario);
    if (this.numeroBuscado != this.numeroUsuario) {
      this.contador--;
      window.alert('Te quedan ' + this.contador + ' intentos');
      if (this.contador < 1) {
        window.alert('Has perdido');
        this.finPartida = true;
      }
    }
    if (this.numeroBuscado == this.numeroUsuario) {
      console.log('Felicidades, lo has encontrado!!!');
      window.alert('Has ganado la partida!!!');
      this.finPartida = true;
    }
    if (this.finPartida) {
      this.contadorTimer.stop(); //paro el contador
      let ti = this.contadorTimer.get();
      console.log('Has tardado ' + ti.minutes + ' minutos y ' + ti.seconds + ' segundos');
    }
  }
}
AdivinaComponent.ɵfac = function AdivinaComponent_Factory(t) {
  return new (t || AdivinaComponent)();
};
AdivinaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AdivinaComponent,
  selectors: [["app-adivina"]],
  viewQuery: function AdivinaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contadorTimer = _t.first);
    }
  },
  decls: 12,
  vars: 2,
  consts: [[1, "form-group"], ["for", "idnum", "for", "idnum", 1, "m-2"], ["type", "number", "id", "idnum", 1, "m-2", 3, "ngModel", "ngModelChange"], [3, "click"], ["format", "intelli"], ["basicTimer", ""]],
  template: function AdivinaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdivinaComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.numeroUsuario = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdivinaComponent_Template_button_click_7_listener() {
        return ctx.comprobarIntento();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Probar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "cd-timer", 4, 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titulo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numeroUsuario);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, angular_cd_timer__WEBPACK_IMPORTED_MODULE_2__.CdTimerComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6976:
/*!***********************************************************!*\
  !*** ./src/app/components/busqueda/busqueda.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusquedaComponent: () => (/* binding */ BusquedaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/restaurante.service */ 3423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mapa/mapa.component */ 6851);




const _c0 = ["cajabusqueda"];
const _c1 = ["mapa"];
function BusquedaComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 8)(1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Lista de Restaurantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BusquedaComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BusquedaComponent_a_6_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const rest_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.restaurateTocado(rest_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BusquedaComponent_a_6_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const rest_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.restaurateTocado(rest_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ir al mapa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rest_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate5"]("", rest_r4.nombre, " ", rest_r4.barrio, " ", rest_r4.especialidad1, " ", rest_r4.especialidad2, " ", rest_r4.especialidad3, " ");
  }
}
class BusquedaComponent {
  constructor(restauranteService) {
    this.restauranteService = restauranteService;
  }
  //filtroBusqueda
  ngOnInit() {}
  busqueda1() {
    let terminoBusqueda = this.cajaInput.nativeElement.value;
    console.log('Búsqueda 1' + terminoBusqueda);
    if (terminoBusqueda != '') {
      this.restauranteService.getRestaurantePorFiltro(terminoBusqueda).subscribe({
        complete: () => console.log("completado"),
        error: errorRx => console.error(errorRx),
        next: listaRestaurantesRx => {
          this.listaRestaurantes = listaRestaurantesRx;
        }
      });
    } else {
      this.listaRestaurantes.length = 0;
    }
    //TODO: consumir el servicio web de búsqueda
    //para traer los restaurantes que coincidan
    //con el término de búsqueda
  }

  restaurateTocado(restaurante) {
    this.listaRestaurantes.length = 0;
    console.log('Nombre tocado = ' + restaurante.nombre);
    //alert('Nombre tocado = ' + restaurante.nombre + ' id ' + restaurante.id);
    this.mapa.dibujarPuntoNombre(restaurante.latitud, restaurante.longitud, restaurante.nombre);
  }
  encuentrame() {
    if (navigator.geolocation) {
      console.log("tenemos acceso al Api Geolocation");
      navigator.geolocation.getCurrentPosition(pos => this.exito(pos), () => this.fracaso);
    }
  }
  exito(position) {
    console.log("Se ha encontrado su posición");
    console.log(`Latitud ${position.coords.latitude}`);
    console.log(`Longitud ${position.coords.longitude}`);
    this.mapa.dibujarPunto(position.coords.latitude, position.coords.longitude);
  }
  fracaso() {
    alert("No es posible determinar su ubicación en este dispusitivo");
  }
}
BusquedaComponent.ɵfac = function BusquedaComponent_Factory(t) {
  return new (t || BusquedaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__.RestauranteService));
};
BusquedaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BusquedaComponent,
  selectors: [["app-busqueda"]],
  viewQuery: function BusquedaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cajaInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapa = _t.first);
    }
  },
  decls: 11,
  vars: 2,
  consts: [[1, "form-group"], ["for", "busqueda"], ["type", "search", "id", "busqueda", "name", "busqueda", "aria-describedby", "busqueda", "placeholder", "Intro nombre barrio o especialidad", 1, "form-control", 3, "keyup"], ["cajabusqueda", ""], ["class", "list-group", 4, "ngIf"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], ["mapa", ""], [1, "btn-color", 3, "click"], [1, "list-group"], [1, "list-group-item", "active", 2, "background-color", "#038888", "border", "none", "margin", "5px"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "btn", "btn-primary", 2, "background-color", "darkcyan", "margin", "2px 8px", "border", "none", 3, "click"]],
  template: function BusquedaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "B\u00FAsqueda de Restaurante");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BusquedaComponent_Template_input_keyup_3_listener() {
        return ctx.busqueda1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BusquedaComponent_ul_5_Template, 3, 0, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BusquedaComponent_a_6_Template, 4, 5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-mapa", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BusquedaComponent_Template_button_click_9_listener() {
        return ctx.encuentrame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "ENCUENTRAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listaRestaurantes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listaRestaurantes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__.MapaComponent],
  styles: ["a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.btn-color[_ngcontent-%COMP%]{\n    background: darkcyan;\n    border: none;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9idXNxdWVkYS9idXNxdWVkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZDogZGFya2N5YW47XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3088:
/*!*****************************************************!*\
  !*** ./src/app/components/chuck/chuck.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChuckComponent: () => (/* binding */ ChuckComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_chuck_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/chuck.service */ 5162);


class ChuckComponent {
  constructor(servicioChuck) {
    this.servicioChuck = servicioChuck;
  }
  ngOnInit() {
    this.servicioChuck.getFraseChuck().subscribe({
      next: frase => {
        console.log('Frase bien recibida');
        this.fraseChuck = frase.value;
      },
      error: fallo => {
        alert('fallo al obtener la frase');
      },
      complete: () => console.log('com completada')
    });
  }
}
ChuckComponent.ɵfac = function ChuckComponent_Factory(t) {
  return new (t || ChuckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_chuck_service__WEBPACK_IMPORTED_MODULE_0__.ChuckService));
};
ChuckComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChuckComponent,
  selectors: [["app-chuck"]],
  decls: 3,
  vars: 1,
  template: function ChuckComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chuck works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", ctx.fraseChuck, "");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 10:
/*!*************************************************!*\
  !*** ./src/app/components/dni/dni.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DniComponent: () => (/* binding */ DniComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_dni__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/dni */ 6376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function DniComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Su letra es ", ctx_r0.letra, "");
  }
}
function DniComponent_table_25_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dniaux_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r5.prefijo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r5.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r5.letra);
  }
}
function DniComponent_table_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 15)(1, "thead", 16)(2, "tr")(3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PREFIJO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "NUMERO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "LETRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DniComponent_table_25_tr_10_Template, 7, 3, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DniComponent_table_25_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.ordenarNumero());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ordenar por N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DniComponent_table_25_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.ordenarLetra());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ordenar por Letra");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listaCompleta);
  }
}
function DniComponent_table_27_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dniaux_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r10.prefijo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r10.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r10.letra);
  }
}
function DniComponent_table_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 15)(1, "thead", 16)(2, "tr")(3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PREFIJO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "NUMERO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "LETRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DniComponent_table_27_tr_10_Template, 7, 3, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listaCompleta);
  }
}
function DniComponent_table_28_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dniaux_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r12.prefijo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r12.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dniaux_r12.letra);
  }
}
function DniComponent_table_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 15)(1, "thead", 16)(2, "tr")(3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PREFIJO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "NUMERO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "LETRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DniComponent_table_28_tr_10_Template, 7, 3, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.listaCompleta);
  }
}
class DniComponent {
  constructor() {
    this.dni = '';
    this.letra = '';
    this.listaDni = new Array();
    this.listaNie = new Array();
    this.listaCompleta = [];
  }
  //TODO: completar el ejercicio, para que funcione
  //e informe de la letra del dni introducido
  ngOnInit() {
    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado = document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
  }
  calcularLetra() {
    let dni = new src_app_models_dni__WEBPACK_IMPORTED_MODULE_0__.Dni();
    let numdni = 0;
    let inputSeleccionado = document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
    if (inputSeleccionado.value != 'sin') {
      //estoy en el caso extranjero , recalculo el dni
      let dnistrin = inputSeleccionado.value + this.dni;
      numdni = parseInt(dnistrin);
      dni.prefijo = inputSeleccionado.id;
    } else {
      numdni = parseInt(this.dni);
    }
    console.log(`El número introducido es  ${this.dni}`);
    //Integer numero = java
    let resto = numdni % 23;
    this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log('la letra es ' + this.letra);
    dni.letra = this.letra;
    dni.numero = parseInt(this.dni);
    if (dni.prefijo === '') {
      this.listaDni.push(dni);
    } else {
      this.listaNie.push(dni);
    }
    this.listaCompleta.push(dni);
    this.mostrarListaDni();
    this.dniExtrangeros();
    this.mostrarTodos();
  }
  mostrarListaDni() {
    console.log('Mostrando lista DNI');
    this.listaDni.forEach(d => {
      console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`);
    });
  }
  //Metodo que saque lista de nie
  dniExtrangeros() {
    console.log('Lista NIE');
    const result = this.listaNie.filter(listaNie => listaNie.prefijo !== '');
    result.forEach(d => {
      let listaN = `NIE = ${d.prefijo}${d.numero}-${d.letra}`;
      console.log(listaN);
    });
  }
  mostrarTodos() {
    console.log('Mostrando lista completa');
    this.listaCompleta.forEach(d => {
      console.log(`Documento = ${d.prefijo}${d.numero}-${d.letra}`);
    });
  }
  ordenarNumero() {
    this.listaCompleta.sort((dni1, dni2) => dni1.numero - dni2.numero);
  }
  //Añadir el boton para ordenar por letras
  ordenarLetra() {
    this.listaCompleta.sort((dni1, dni2) => dni1.letra.localeCompare(dni2.letra));
  }
}
//readonly pq es constante
//static es un atributo de la clase
//para cada etiqueta/instancia, no cambia
DniComponent.SECUENCIA_LETRAS_DNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
DniComponent.ɵfac = function DniComponent_Factory(t) {
  return new (t || DniComponent)();
};
DniComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DniComponent,
  selectors: [["app-dni"]],
  decls: 29,
  vars: 5,
  consts: [[1, "form-check"], ["value", "sin", "type", "radio", "name", "prefijo", "id", "sin", "checked", "", 1, "form-check-input"], ["for", "sin", 1, "form-check-label"], ["value", "0", "type", "radio", "name", "prefijo", "id", "X", 1, "form-check-input"], ["for", "x", 1, "form-check-label"], ["value", "1", "type", "radio", "name", "prefijo", "id", "Y", 1, "form-check-input"], ["for", "y", 1, "form-check-label"], ["value", "2", "type", "radio", "name", "prefijo", "id", "Z", 1, "form-check-input"], ["for", "z", 1, "form-check-label"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Meta su dni", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 2, "margin-right", "15px", 3, "click"]],
  template: function DniComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sin letra (dni espa\u00F1ol) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " X ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Y ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Z ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "DNI");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DniComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.dni = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DniComponent_Template_button_click_20_listener() {
        return ctx.calcularLetra();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Calcular Letra");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DniComponent_span_23_Template, 2, 1, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DniComponent_table_25_Template, 15, 1, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DniComponent_table_27_Template, 11, 1, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DniComponent_table_28_Template, 11, 1, "table", 14);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dni);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.letra != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaCompleta.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaNie.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaDni.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9522:
/*!***************************************************************!*\
  !*** ./src/app/components/formulario/formulario.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormularioComponent: () => (/* binding */ FormularioComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_restaurante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/restaurante */ 1835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_restaurante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/restaurante.service */ 3423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function FormularioComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const barrio_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", barrio_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](barrio_r12);
  }
}
/**
 * Forulario alta y modificación de registro(restaurante)
 * @autor Verónika
 */
class FormularioComponent {
  constructor(RestauranteService, servicioRutas) {
    this.RestauranteService = RestauranteService;
    this.servicioRutas = servicioRutas;
    this.restaurante = new src_app_models_restaurante__WEBPACK_IMPORTED_MODULE_0__.Restaurante();
    this.restaurante.nombre = 'El Cateto';
    this.restaurante.direccion = 'La fuente s/n';
    this.restaurante.barrio = 'Este';
    this.restaurante.web = 'http://www.elcateto.org';
    this.restaurante.fichaGoogle = 'http://www.google.elcateto.org';
    this.restaurante.latitud = 30;
    this.restaurante.longitud = 30;
    this.restaurante.precio = 10;
    this.restaurante.especialidad1 = 'Marisco';
    this.restaurante.especialidad2 = 'Pescado';
    this.restaurante.especialidad3 = 'Carne';
    this.barrios = ['Centro', 'Este', 'Ciudad Jardín', 'Bailén-Miraflores', 'Palma-Palmilla', 'Cruz de Humilladero', 'Carretera de Cádiz', 'Churriana', 'Campanillas', 'Puerto de la Torre', 'Teatinos-Universidad'];
  }
  ngOnInit() {}
  /**
   * Creación de restaurantes
   */
  crearRestaurante() {
    console.log('enviar los datos');
    console.log(`Restaurante 
     ${this.restaurante.nombre}
     ${this.restaurante.direccion}
     ${this.restaurante.barrio}
     ${this.restaurante.web}
     ${this.restaurante.fichaGoogle}
     ${this.restaurante.latitud}
     ${this.restaurante.longitud}
     ${this.restaurante.precio}
     ${this.restaurante.especialidad1}
     ${this.restaurante.especialidad2}
     ${this.restaurante.especialidad3}
    `);
    if (this.foto_seleccionada != null) {
      //Llamamos a post con foto
      this.RestauranteService.postRestauranteConFoto(this.restaurante, this.foto_seleccionada).subscribe({
        complete: () => console.log('Comunicación completada con foto'),
        error: errorRx => {
          console.log(errorRx);
          alert('Error al insertar el restaurante con foto');
        },
        next: restauranteNuevo => {
          alert(`Restaurante insertado correctamente con id ${restauranteNuevo.id}`);
          this.servicioRutas.navigateByUrl('/restaurantes');
        }
      });
    } else {
      //llamamos a post normal
      this.RestauranteService.postRestaurante(this.restaurante).subscribe({
        complete: () => console.log('Comunicación completada'),
        error: errorRx => {
          console.log(errorRx);
          alert('Error al insertar el restaurante');
        },
        next: restauranteNuevo => {
          alert(`Restaurante insertado correctamente con id ${restauranteNuevo.id}`);
          this.servicioRutas.navigateByUrl('/restaurantes');
        }
      });
    }
  }
  /**
   * Método para adjuntar archivo al formulario de alta y modificación
   *  @param evento
   */
  seleccionarFoto(evento) {
    console.log("foto cambiada");
    //evento.target //éste es el input file
    let input_file = evento.target;
    if (input_file.files) {
      this.foto_seleccionada = input_file.files[0];
      console.log("Nombre fichero sel = " + this.foto_seleccionada.name);
      console.log("Tipo fichero sel = " + this.foto_seleccionada.type);
      //si es una imagen, perfecto "me la quedo"
      if (this.foto_seleccionada.type.indexOf('image') >= 0) {
        console.log("el usuario ha seleccionado una imagen");
      } else {
        console.log("el usuario NO ha seleccionado una imagen");
        this.foto_seleccionada = null;
        //si no, la elimino, "no me la quedo"
      }
    }
  }
}

FormularioComponent.ɵfac = function FormularioComponent_Factory(t) {
  return new (t || FormularioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_restaurante_service__WEBPACK_IMPORTED_MODULE_1__.RestauranteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
FormularioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormularioComponent,
  selectors: [["app-formulario"]],
  decls: 89,
  vars: 19,
  consts: [[3, "ngSubmit"], ["formulario_restaurante", "ngForm"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "placeholder", "Intro nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombre", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "direccion"], ["type", "text", "id", "direccion", "name", "direccion", "placeholder", "Intro direccion", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "nbarrio"], ["name", "nbarrio", "id", "nbarrio", "title", "listaBarrios", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "web"], ["type", "text", "id", "web", "name", "web", "placeholder", "Intro web", "required", "", "pattern", "[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["web", "ngModel"], ["for", "fichaGoogle"], ["type", "text", "id", "fichaGoogle", "name", "fichaGoogle", "placeholder", "Intro ficha", "required", "", "pattern", "[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fichaGoogle", "ngModel"], ["for", "latitud"], ["type", "number", "id", "latitud", "name", "latitud", "placeholder", "Latitud", 1, "form-control", 3, "ngModel", "ngModelChange"], ["latitud", "ngModel"], ["for", "longitud"], ["type", "number", "id", "longitud", "name", "longitud", "placeholder", "Longitud", 1, "form-control", 3, "ngModel", "ngModelChange"], ["longitud", "ngModel"], ["for", "precio"], ["type", "number", "id", "precio", "name", "precio", "placeholder", "Precio", "required", "", "min", "2", "max", "500", 1, "form-control", 3, "ngModel", "ngModelChange"], ["precio", "ngModel"], ["for", "especialidad1"], ["type", "text", "id", "especialidad1", "name", "especialidad1", "placeholder", "Especialidad 1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["especialidad1", "ngModel"], ["for", "especialidad2"], ["type", "text", "id", "especialidad2", "name", "especialidad2", "placeholder", "Especialidad 2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["especialidad2", "ngModel"], ["for", "especialidad3"], ["type", "text", "id", "especialidad3", "name", "especialidad1", "placeholder", "Especialidad 3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["especialidad3", "ngModel"], ["for", "foto"], ["type", "file", "id", "foto", "name", "foto", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
  template: function FormularioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormularioComponent_Template_form_ngSubmit_0_listener() {
        return ctx.crearRestaurante();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.restaurante.nombre = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Nombre obligatorio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Direcci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.restaurante.direccion = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Direccion obligatoria ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2)(19, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Barrio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_select_ngModelChange_21_listener($event) {
        return ctx.restaurante.barrio = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FormularioComponent_option_22_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2)(25, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Web");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.restaurante.web = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Formato Web incorrecto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2)(33, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Ficha Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.restaurante.fichaGoogle = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Formato Web incorrecto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 2)(41, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Latitud");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_43_listener($event) {
        return ctx.restaurante.latitud = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Formato Latitud incorrecto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 2)(49, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Longitud");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_51_listener($event) {
        return ctx.restaurante.longitud = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Formato Longitud incorrecto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 2)(57, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Precio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "input", 26, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.restaurante.precio = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Formato Web incorrecto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 2)(65, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Especialidad 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_67_listener($event) {
        return ctx.restaurante.especialidad1 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 2)(71, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Especialidad 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "input", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_73_listener($event) {
        return ctx.restaurante.especialidad2 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 2)(77, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Especialidad 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "input", 35, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_79_listener($event) {
        return ctx.restaurante.especialidad3 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 2)(83, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Foto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormularioComponent_Template_input_change_85_listener($event) {
        return ctx.seleccionarFoto($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "CREAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r1.pristine || _r1.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.direccion);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r2.pristine || _r2.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.barrio);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.barrios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.web);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r4.pristine || _r4.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.fichaGoogle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r5.pristine || _r5.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.latitud);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r6.pristine || _r6.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.longitud);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r7.pristine || _r7.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.precio);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r8.pristine || _r8.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.especialidad1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.especialidad2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.restaurante.especialidad3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5541:
/*!*****************************************************!*\
  !*** ./src/app/components/frase/frase.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FraseComponent: () => (/* binding */ FraseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



function FraseComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Intenta leer al reves tu frase: ", ctx_r0.resultadoFrase, "");
  }
}
function FraseComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("La frase tiene ", ctx_r1.resultadoFrase.length, " caracteres");
  }
}
function FraseComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("La longitud de la frase es ", ctx_r2.resultadoParInpar, "");
  }
}
class FraseComponent {
  /**
   * permita al usuario intrododucir una cadena
   *que muestre la misma cadena que va introduciendo el usuario , pero al revés
   *que muestre la longitud de esa cadena
   *y que diga si la longitud de esa cadena es par o impar
   */
  constructor() {
    console.log('Estoy en el constructor');
    this.titulo = 'FRASES Y PALABRAS...';
    this.frase = '';
    this.resultadoFrase = '';
    this.longitud = 0;
    this.esPar = false;
    this.resultadoParInpar = '';
  }
  ngOnInit() {
    //throw new Error('Method not implemented.');
    console.log('Estoy en el OnInit');
  }
  fraseAlReves() {
    //String se convierte en array de caracteres (OPERADOR DE DISPERSIÓN)
    let fraseAlReves = [...this.resultadoFrase];
    //le damos la vuelta al string
    fraseAlReves.reverse();
    // volvemos a convertir a string
    this.resultadoFrase = fraseAlReves.join('');
    //contamos los caracteres
    this.longitud = this.resultadoFrase.length;
    //Comprobamos si es par o impar
    this.cadenaEsPar();
  }
  cadenaEsPar() {
    if (this.longitud % 2 === 0) {
      this.esPar = true;
      this.resultadoParInpar = 'PAR';
    } else {
      this.resultadoParInpar = 'IMPAR';
    }
  }
}
FraseComponent.ɵfac = function FraseComponent_Factory(t) {
  return new (t || FraseComponent)();
};
FraseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FraseComponent,
  selectors: [["app-frase"]],
  decls: 14,
  vars: 5,
  consts: [[1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Escriba una frase...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 2, "background-color", "darkcyan", "color", "azure", "border-color", "darkcyan", 3, "click"], [4, "ngIf"]],
  template: function FraseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0)(3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FRASE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FraseComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.resultadoFrase = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FraseComponent_Template_button_click_6_listener() {
        return ctx.fraseAlReves();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Analizar Frase");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FraseComponent_span_9_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FraseComponent_span_11_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FraseComponent_span_13_Template, 2, 1, "span", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titulo, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resultadoFrase);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resultadoFrase != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resultadoFrase);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resultadoFrase && ctx.resultadoParInpar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3311:
/*!*************************************************!*\
  !*** ./src/app/components/imc/imc.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImcComponent: () => (/* binding */ ImcComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



function ImcComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Presenta DESNUTRICION, vigile su alimentaci\u00F3n y consulte un especialista\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ImcComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Presenta DELGADEZ, vigile su alimentaci\u00F3n y consulte un especialista\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ImcComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Est\u00E1 en su PESO IDEAL, Felicidades!!!!\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br")(4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ImcComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Presenta SOBREPESO, vigile su alimentaci\u00F3n y consulte un especialista\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ImcComponent_div_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Presenta OBESIDAD, vigile su alimentaci\u00F3n y consulte un especialista\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br")(4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ImcComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImcComponent_div_14_div_1_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImcComponent_div_14_div_2_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImcComponent_div_14_div_3_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImcComponent_div_14_div_4_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImcComponent_div_14_div_5_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imc < 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imc >= 16 && ctx_r0.imc < 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imc >= 20 && ctx_r0.imc < 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imc >= 24 && ctx_r0.imc < 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imc > 29);
  }
}
class ImcComponent {
  ngOnInit() {
    //throw new Error('Method not implemented.');
  }
  calcularImc() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
    }
  }
}
ImcComponent.ɵfac = function ImcComponent_Factory(t) {
  return new (t || ImcComponent)();
};
ImcComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ImcComponent,
  selectors: [["app-imc"]],
  decls: 15,
  vars: 3,
  consts: [[1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "number", "step", "0.1", "placeholder", "Introduzca su peso en Kg", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "step", "0.01", "placeholder", "introduzca su altura en M", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-info ", "role", "alert", 4, "ngIf"], ["class", "alert alert-success ", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fs-2"], ["role", "alert", 1, "alert", "alert-info"], [1, "fs-4"], ["role", "alert", 1, "alert", "alert-success"], ["src", "../../../assets/OK_Think_Stock_360.jpg", "alt", "ok", 1, "rounded", "mx-auto", "d-block"], ["role", "alert", 1, "alert", "alert-warning"], ["src", "../../../assets/Sin t\u00EDtulo.jpg", "alt", "...", 1, "rounded", "mx-auto", "d-block"]],
  template: function ImcComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calcula tu IMC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PESO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImcComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.peso = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ALTURA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImcComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.altura = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImcComponent_Template_button_click_10_listener() {
        return ctx.calcularImc();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calcular IMC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br")(13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ImcComponent_div_14_Template, 6, 5, "div", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peso);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.altura);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imc);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6851:
/*!***************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapaComponent: () => (/* binding */ MapaComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 7198);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class MapaComponent {
  constructor() {}
  ngOnInit() {
    this.initMap();
  }
  initMap() {
    this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map('map', {
      center: [36.72016, -4.42034],
      zoom: 11
    });
    const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
  dibujarPunto(latitud, longitud) {
    let nivel_de_zoom = 12;
    this.map.setView([latitud, longitud], nivel_de_zoom);
    leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([latitud, longitud]).addTo(this.map).bindPopup('Usted se encuentra en esta localización ').openPopup();
  }
  dibujarPuntoNombre(latitud, longitud, nombre) {
    let nivel_de_zoom = 12;
    this.map.setView([latitud, longitud], nivel_de_zoom);
    leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([latitud, longitud]).addTo(this.map).bindPopup('Restaurante ' + nombre).openPopup();
  }
  //Codigo Val (no en uso)
  dibujarPosicion(latitude, longitude) {
    //USO EL API DE LEAFLET //https://leafletjs.com/examples/quick-start/
    let nivel_de_zoom = 12;
    this.map.setView([latitude, longitude], nivel_de_zoom); //
    //coordenadas del Estadio del Madrid 40.4530387,-3.6883337
    var circle = leaflet__WEBPACK_IMPORTED_MODULE_0__.circle([latitude, longitude], {
      color: 'blue',
      fillColor: '#000',
      fillOpacity: 0.5,
      radius: 50
    }).addTo(this.map);
  }
}
MapaComponent.ɵfac = function MapaComponent_Factory(t) {
  return new (t || MapaComponent)();
};
MapaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MapaComponent,
  selectors: [["app-mapa"]],
  decls: 3,
  vars: 0,
  consts: [[1, "map-container"], [1, "map-frame"], ["id", "map"]],
  template: function MapaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  styles: [".map-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 400px;\n    width: auto;\n    margin: 20px;\n  }\n  \n  .map-frame[_ngcontent-%COMP%] {\n    border: 2px solid black;\n    height: 100%;\n  }\n  \n  #map[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBhL21hcGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXAtZnJhbWUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6855:
/*!*****************************************************!*\
  !*** ./src/app/components/perro/perro.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerroComponent: () => (/* binding */ PerroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_service_perro_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/perro.service */ 8844);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function PerroComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerroComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.damePerro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cargar Perro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.perroWeb.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Raza may\u00FAsucla ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r0.raza), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Raza may\u00FAsucla ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, ctx_r0.raza), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Raza may\u00FAsucla ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, ctx_r0.raza), " ");
  }
}
class PerroComponent {
  constructor(perroService) {
    this.perroService = perroService;
    this.observerPerros = {
      next: perroRx => {
        console.log('Perro recibido bien');
        console.log(perroRx.message);
        console.log(perroRx.status);
        this.perroWeb = perroRx;
        let palabrasUrl = perroRx.message.split('/');
        console.log('la raza es ' + palabrasUrl[4]);
        this.raza = palabrasUrl[4];
      },
      error: fallo => console.error('Fallo al rx el Perro ' + fallo),
      complete: () => console.log('Comunicación completada')
    };
    console.log('Estamos cargado el componente');
  }
  //LA COMUNICACIÓN CON UN SERVICIO, DEBER HACERSE
  //DESDE ngOnInit https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
  ngOnInit() {
    console.log('Vamos a traernos un perro del servidor');
    //cuando me suscribo al Observer, le estoy diciendo, cuando vuelvas, me avisas aquí
    this.damePerro();
    console.log('PERRO SOLICTADO ... ');
  }
  //TODO: haced un pie de foto en el que salga la raza del perro
  damePerro() {
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
  }
}
PerroComponent.ɵfac = function PerroComponent_Factory(t) {
  return new (t || PerroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_perro_service__WEBPACK_IMPORTED_MODULE_0__.PerroService));
};
PerroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PerroComponent,
  selectors: [["app-perro"]],
  decls: 1,
  vars: 1,
  consts: [["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["alt", "Foto Perro", 1, "img-fluid", 3, "src"], [1, "btn", "btn-primary", 3, "click"]],
  template: function PerroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PerroComponent_div_0_Template, 13, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perroWeb);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe],
  styles: ["img[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 200px;\n  max-height: 200px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wZXJyby9wZXJyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 269:
/*!*******************************************************************!*\
  !*** ./src/app/components/restaurantes/restaurantes.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestaurantesComponent: () => (/* binding */ RestaurantesComponent)
/* harmony export */ });
/* harmony import */ var _service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/restaurante.service */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);





function RestaurantesComponent_div_6_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const restaurante_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.ruta_servicio_foto, "/", restaurante_r2.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function RestaurantesComponent_div_6_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
  }
}
function RestaurantesComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RestaurantesComponent_div_6_div_1_img_1_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RestaurantesComponent_div_6_div_1_img_2_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p")(13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Especialidad en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ir a la web");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br")(21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantesComponent_div_6_div_1_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.borrarRestaurante());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Borrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const restaurante_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", restaurante_r2.fotHashCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", restaurante_r2.fotHashCode == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](restaurante_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", restaurante_r2.direccion, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", restaurante_r2.barrio, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Precio medio: ", restaurante_r2.precio, "\u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", restaurante_r2.especialidad1, ", ", restaurante_r2.especialidad2, ", ", restaurante_r2.especialidad3, " ");
  }
}
function RestaurantesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RestaurantesComponent_div_6_div_1_Template, 24, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listaRestaurantes);
  }
}
class RestaurantesComponent {
  constructor(restauranteService) {
    this.restauranteService = restauranteService;
    this.ruta_servicio_foto = _service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__.RestauranteService.URL_ACTUAL + "/obtenerFoto";
  }
  ngOnInit() {
    this.restauranteService.getListaRestaurantes().subscribe({
      complete: () => console.log('Comunicación completada'),
      error: errorRx => {
        console.error(errorRx);
      },
      next: listaRestaurantesRx => {
        console.log('Lista Restaurantes recibida');
        listaRestaurantesRx.forEach(rest => {
          console.log(`ID = ${rest.id} NOMBRE = ${rest.nombre}`);
        });
        this.listaRestaurantes = listaRestaurantesRx;
      }
    });
  }
  borrarRestaurante() {
    console.log('Quiere borrar restaurante');
  }
}
RestaurantesComponent.ɵfac = function RestaurantesComponent_Factory(t) {
  return new (t || RestaurantesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__.RestauranteService));
};
RestaurantesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RestaurantesComponent,
  selectors: [["app-restaurantes"]],
  decls: 7,
  vars: 1,
  consts: [[2, "color", "orange"], ["src", "/assets/favicon.png"], ["routerLink", "/restaurantes/alta", 1, "btn", "btn-success"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "card col-4 mx-2 my-2", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], [1, "card", "col-4", "mx-2", "my-2", 2, "width", "18rem"], ["class", "card-img-top", "alt", "logo", 3, "src", 4, "ngIf"], ["src", "../../../assets/logo.png", "class", "card-img-top", "alt", "logo", 4, "ngIf"], [1, "card-body"], [1, "card-title", 2, "color", "orange"], [1, "card-text"], [1, "fs-5", 2, "color", "cadetblue"], ["href", "#", 1, "btn", "btn-primary", "color", "size"], [1, "btn", "btn-danger", 3, "click"], ["alt", "logo", 1, "card-img-top", 3, "src"], ["src", "../../../assets/logo.png", "alt", "logo", 1, "card-img-top"]],
  template: function RestaurantesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " RESTAURANTES M\u00C1LAGA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nuevo Restaurante");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RestaurantesComponent_div_6_Template, 2, 1, "div", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaRestaurantes && ctx.listaRestaurantes.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".color[_ngcontent-%COMP%]{\n    background-color: #10dfab;\n    border: none;\n}\n.size[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-around;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50ZXMvcmVzdGF1cmFudGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGRmYWI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnNpemV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9038:
/*!***************************************************************************!*\
  !*** ./src/app/components/restaurantesnpag/restaurantesnpag.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestaurantesnpagComponent: () => (/* binding */ RestaurantesnpagComponent)
/* harmony export */ });
/* harmony import */ var _service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/restaurante.service */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 9687);






function RestaurantesnpagComponent_div_6_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
  }
  if (rf & 2) {
    const restaurante_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.ruta_servicio_foto, "/", restaurante_r2.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function RestaurantesnpagComponent_div_6_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
}
function RestaurantesnpagComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RestaurantesnpagComponent_div_6_div_1_img_2_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RestaurantesnpagComponent_div_6_div_1_img_3_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11)(5, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p")(14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Especialidad en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Ir a la web");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantesnpagComponent_div_6_div_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.borrarRestaurante());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Borrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const restaurante_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", restaurante_r2.fotHashCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", restaurante_r2.fotHashCode == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](restaurante_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", restaurante_r2.direccion, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", restaurante_r2.barrio, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Precio medio: ", restaurante_r2.precio, "\u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", restaurante_r2.especialidad1, ", ", restaurante_r2.especialidad2, ", ", restaurante_r2.especialidad3, " ");
  }
}
function RestaurantesnpagComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RestaurantesnpagComponent_div_6_div_1_Template, 25, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-paginator", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function RestaurantesnpagComponent_div_6_Template_mat_paginator_page_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.paginar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listaRestaurantes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r0.totalRegistros)("pageSize", ctx_r0.totalPorPagina)("pageSizeOptions", ctx_r0.opcionesTamanio)("pageIndex", ctx_r0.paginaActual);
  }
}
class RestaurantesnpagComponent {
  constructor(restauranteService) {
    this.restauranteService = restauranteService;
    this.totalRegistros = 0; //Total de restaurantes que tenemos
    this.totalPorPagina = 4; //Restaurantes que se muenstran
    this.opcionesTamanio = [2, 4, 6, 8];
    this.paginaActual = 0;
    this.ruta_servicio_foto = _service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__.RestauranteService.URL_ACTUAL + "/obtenerFoto";
  }
  ngOnInit() {
    this.getRestaurantesPorPaginas();
  }
  paginar(evento) {
    console.log("evento paginator");
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;
    this.getRestaurantesPorPaginas();
  }
  borrarRestaurante() {
    console.log('Quiere borrar restaurante');
  }
  getRestaurantesPorPaginas() {
    this.restauranteService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).subscribe({
      complete: () => console.log("completo"),
      error: errorRx => console.error(errorRx),
      next: pagina => {
        //hago el castin
        this.listaRestaurantes = pagina.content;
        this.totalRegistros = pagina.totalElements;
      }
    });
  }
}
RestaurantesnpagComponent.ɵfac = function RestaurantesnpagComponent_Factory(t) {
  return new (t || RestaurantesnpagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_restaurante_service__WEBPACK_IMPORTED_MODULE_0__.RestauranteService));
};
RestaurantesnpagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RestaurantesnpagComponent,
  selectors: [["app-restaurantesnpag"]],
  decls: 7,
  vars: 1,
  consts: [[1, "titulo", 2, "color", "cadetblue"], ["src", "/assets/favicon.png"], ["routerLink", "/restaurantes/alta", 1, "btn", "btn-success"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "card col-4 mx-2 my-2 card-container", 4, "ngFor", "ngForOf"], ["aria-label", "Select page", "showFirstLastButton", "", 1, "mat-mdc-paginator-container", 3, "length", "pageSize", "pageSizeOptions", "pageIndex", "page"], [1, "card", "col-4", "mx-2", "my-2", "card-container"], [1, "size", "img-size"], ["class", "card-img-top", "alt", "logo", 3, "src", 4, "ngIf"], ["src", "/assets/logo.png", "class", "card-img-top", "alt", "logo", 4, "ngIf"], [1, "card-body"], [1, "card-title", 2, "color", "orange"], [1, "card-text"], [1, "fs-5", 2, "color", "cadetblue"], [1, "button-size"], ["href", "#", 1, "btn", "btn-primary", "color", "size"], [1, "btn", "btn-danger", 3, "click"], ["alt", "logo", 1, "card-img-top", 3, "src"], ["src", "/assets/logo.png", "alt", "logo", 1, "card-img-top"]],
  template: function RestaurantesnpagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " RESTAURANTES M\u00C1LAGA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nuevo Restaurante");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RestaurantesnpagComponent_div_6_Template, 3, 5, "div", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaRestaurantes && ctx.listaRestaurantes.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator],
  styles: [".card-container[_ngcontent-%COMP%] {\n    width: 18rem;\n    border: none;\n}\n\n.color[_ngcontent-%COMP%]{\n    background-color: #29bbd4;\n    border: none;\n}\n.size[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-around;\n}\n.img-size[_ngcontent-%COMP%]{\n    height: 17em;\n}\n.button-size[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.mat-mdc-paginator-container[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50ZXNucGFnL3Jlc3RhdXJhbnRlc25wYWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWJiZDQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnNpemV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmltZy1zaXple1xyXG4gICAgaGVpZ2h0OiAxN2VtO1xyXG59XHJcbi5idXR0b24tc2l6ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm1hdC1tZGMtcGFnaW5hdG9yLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6376:
/*!*******************************!*\
  !*** ./src/app/models/dni.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dni: () => (/* binding */ Dni)
/* harmony export */ });
class Dni {
  constructor() {
    this.numero = 0;
    this.letra = '';
    this.prefijo = '';
  }
}

/***/ }),

/***/ 1835:
/*!***************************************!*\
  !*** ./src/app/models/restaurante.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Restaurante: () => (/* binding */ Restaurante)
/* harmony export */ });
class Restaurante {
  constructor() {
    this.id = 0;
    this.nombre = '';
    this.direccion = '';
    this.barrio = '';
    this.web = '';
    this.fichaGoogle = '';
    this.latitud = 0;
    this.longitud = 0;
    this.precio = 0;
    this.especialidad1 = '';
    this.especialidad2 = '';
    this.especialidad3 = '';
    this.creadoEn = '';
    this.fotHashCode = 0;
  }
}

/***/ }),

/***/ 5162:
/*!******************************************!*\
  !*** ./src/app/service/chuck.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChuckService: () => (/* binding */ ChuckService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class ChuckService {
  constructor(http) {
    this.http = http;
  }
  getFraseChuck() {
    return this.http.get(ChuckService.URL_CHUCK);
  }
}
ChuckService.URL_CHUCK = 'https://api.chucknorris.io/jokes/random';
ChuckService.ɵfac = function ChuckService_Factory(t) {
  return new (t || ChuckService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ChuckService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ChuckService,
  factory: ChuckService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8844:
/*!******************************************!*\
  !*** ./src/app/service/perro.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerroService: () => (/* binding */ PerroService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class PerroService {
  /*@Autowired
  httpClient:HttpClient;*/
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  //el método me devuelve un PerroWeb, en un futuro, dentro de un rato
  getPerroAleatorio() {
    //Entre <comillas> inidico el tipo de dato recibido el cuerpo del mensaje en JSON
    return this.httpClient.get(PerroService.URL_API_PERROS);
  }
}
//DESDE AQUÍ, VAMOS A INTERACATUAR CON EL SERVIDOR
PerroService.URL_API_PERROS = 'https://dog.ceo/api/breeds/image/random';
PerroService.ɵfac = function PerroService_Factory(t) {
  return new (t || PerroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
PerroService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PerroService,
  factory: PerroService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3423:
/*!************************************************!*\
  !*** ./src/app/service/restaurante.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestauranteService: () => (/* binding */ RestauranteService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class RestauranteService {
  constructor(http) {
    this.http = http;
    this.cabeceras = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'content-type': 'application/json'
    });
  }
  getListaRestaurantes() {
    return this.http.get(RestauranteService.URL_ACTUAL);
  }
  postRestaurante(restaurante) {
    return this.http.post(RestauranteService.URL_ACTUAL, restaurante, {
      headers: this.cabeceras
    });
  }
  postRestauranteConFoto(restaurante, archivo) {
    //declaramos una variable local que represente el FormData
    let formData = new FormData();
    formData.append('nombre', restaurante.nombre);
    formData.append('direccion', restaurante.direccion);
    formData.append('barrio', restaurante.barrio);
    formData.append('web', restaurante.web);
    formData.append('fichaGoogle', restaurante.fichaGoogle);
    formData.append('latitud', restaurante.latitud + '');
    formData.append('longitud', restaurante.longitud + '');
    formData.append('precio', restaurante.precio + '');
    formData.append('especialidad1', restaurante.especialidad1);
    formData.append('especialidad2', restaurante.especialidad2);
    formData.append('especialidad3', restaurante.especialidad3);
    formData.append('archivo', archivo);
    return this.http.post(RestauranteService.URL_ACTUAL + "/crear-con-foto", formData);
  }
  //http://localhost:8081/restaurante/pagina?page=0&size=2
  getPaginaRestaurantes(page, size) {
    let parametros = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page).set('size', size);
    return this.http.get(RestauranteService.URL_ACTUAL + "/pagina", {
      params: parametros
    });
  }
  //http://localhost:8081/restaurante/filtro?nombre=centro
  getRestaurantePorFiltro(input) {
    let parametro = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('nombre', input);
    return this.http.get(RestauranteService.URL_ACTUAL + '/filtro', {
      params: parametro
    });
  }
}
RestauranteService.URL_RESTAURANTES_PROD = 'restaurante';
RestauranteService.URL_RESTAURANTES_TEST = 'http://localhost:8081/restaurante';
RestauranteService.URL_ACTUAL = RestauranteService.URL_RESTAURANTES_PROD;
RestauranteService.ɵfac = function RestauranteService_Factory(t) {
  return new (t || RestauranteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
RestauranteService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RestauranteService,
  factory: RestauranteService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4506:
/*!*********************************************!*\
  !*** ./src/environment/environment.prod.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environment_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment/environment.prod */ 4506);




if (_environment_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map