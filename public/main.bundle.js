webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 144;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(162);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralUtilitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneralUtilitiesService = (function () {
    function GeneralUtilitiesService() {
    }
    return GeneralUtilitiesService;
}());
GeneralUtilitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GeneralUtilitiesService);

//# sourceMappingURL=GeneralUtilities.service.js.map

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(92)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-2!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-2!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GeneralUtilities_service__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(sesVideoScannerService, generalUtilitiesService) {
        this.sesVideoScannerService = sesVideoScannerService;
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            // all good it's chrome
            sesVideoScannerService.browserCompatable = true;
        }
        else {
            sesVideoScannerService.browserCompatable = false;
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-component',
        template: __webpack_require__(216),
        providers: [__WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__["a" /* SESVideoScannerService */], __WEBPACK_IMPORTED_MODULE_3__GeneralUtilities_service__["a" /* GeneralUtilitiesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__GeneralUtilities_service__["a" /* GeneralUtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__GeneralUtilities_service__["a" /* GeneralUtilitiesService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectVideoFiles_components_selectVideoFiles_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defineVideoSizeAndStartPoint_components_defineVideoSizeAndStartPoint_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__defineScanArea_components_defineScanArea_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__doScan_components_doScan_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__showResults_components_showResults_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_components_header_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_components_settings_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_components_settingsForm_component__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_6__selectVideoFiles_components_selectVideoFiles_component__["a" /* SelectVideoFilesComponent */] },
                { path: 'app-define-video-size-and-start-point', component: __WEBPACK_IMPORTED_MODULE_7__defineVideoSizeAndStartPoint_components_defineVideoSizeAndStartPoint_component__["a" /* DefineVideoSizeAndStartPointComponent */] },
                { path: 'app-define-scan-area', component: __WEBPACK_IMPORTED_MODULE_8__defineScanArea_components_defineScanArea_component__["a" /* DefineScanAreaComponent */] },
                { path: 'app-do-scan', component: __WEBPACK_IMPORTED_MODULE_9__doScan_components_doScan_component__["a" /* DoScanComponent */] },
                { path: 'app-show-results', component: __WEBPACK_IMPORTED_MODULE_10__showResults_components_showResults_component__["a" /* ShowResultsComponent */] },
                { path: 'app-settings', component: __WEBPACK_IMPORTED_MODULE_12__settings_components_settings_component__["a" /* SettingsComponent */] }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__selectVideoFiles_components_selectVideoFiles_component__["a" /* SelectVideoFilesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__defineVideoSizeAndStartPoint_components_defineVideoSizeAndStartPoint_component__["a" /* DefineVideoSizeAndStartPointComponent */],
            __WEBPACK_IMPORTED_MODULE_8__defineScanArea_components_defineScanArea_component__["a" /* DefineScanAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__doScan_components_doScan_component__["a" /* DoScanComponent */],
            __WEBPACK_IMPORTED_MODULE_10__showResults_components_showResults_component__["a" /* ShowResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_components_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__settings_components_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__settings_components_settingsForm_component__["a" /* SettingsFormComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineScanAreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefineScanAreaComponent = (function () {
    function DefineScanAreaComponent(sesVideoScannerService, router) {
        this.sesVideoScannerService = sesVideoScannerService;
        this.router = router;
        this.videoDisplayWidth = sesVideoScannerService.videoDisplayWidth;
        this.videoDisplayTop = sesVideoScannerService.videoDisplayTop;
        this.videoDisplayLeft = sesVideoScannerService.videoDisplayLeft;
        this.videoDisplayHeight = sesVideoScannerService.videoDisplayHeight;
        this.scanAreaDisplayTop = sesVideoScannerService.scanAreaDisplayTop;
        this.scanAreaDisplayLeft = sesVideoScannerService.scanAreaDisplayLeft;
        this.scanAreaDisplayWidth = sesVideoScannerService.scanAreaDisplayWidth;
        this.scanAreaDisplayHeight = sesVideoScannerService.scanAreaDisplayHeight;
        var l = localStorage.getItem('scanIncrement');
        if (l === null) {
            this.sesVideoScannerService.scanIncrement = 2;
        }
        else {
            this.sesVideoScannerService.scanIncrement = parseInt(l, 10);
        }
    }
    DefineScanAreaComponent.prototype.getText = function () {
        return 'Position the highlighted scan area by dragging. Drag the white square to resize. When done press "Next".';
    };
    DefineScanAreaComponent.prototype.getImage = function () {
        return this.sesVideoScannerService.sesVideos[0].startPositionImage;
    };
    DefineScanAreaComponent.prototype.ngOnInit = function () {
        this.scanAreaDisplayHeight = 100;
        this.scanAreaDisplayLeft = 600;
        this.scanAreaDisplayTop = 200;
        this.scanAreaDisplayWidth = 100;
        this.positionResizeHandle();
    };
    DefineScanAreaComponent.prototype.dragStart = function (e) {
        this._startDragX = e.clientX;
        this._startdragY = e.clientY;
    };
    DefineScanAreaComponent.prototype.dragEnd = function (e) {
        var dragEndLeft = this.scanAreaDisplayLeft - this._startDragX + e.clientX;
        var dragEndTop = this.scanAreaDisplayTop - this._startdragY + e.clientY;
        if (dragEndLeft < this.videoDisplayLeft) {
            dragEndLeft = this.videoDisplayLeft;
        }
        if (dragEndLeft > this.videoDisplayLeft - this.scanAreaDisplayWidth + this.videoDisplayWidth) {
            dragEndLeft = this.videoDisplayLeft - this.scanAreaDisplayWidth + this.videoDisplayWidth - 10; // -10 is for css borders :-(
        }
        if (dragEndTop < this.videoDisplayTop) {
            dragEndTop = this.videoDisplayTop;
        }
        if (dragEndTop > this.videoDisplayTop - this.scanAreaDisplayHeight + this.videoDisplayHeight) {
            dragEndTop = this.videoDisplayTop - this.scanAreaDisplayHeight + this.videoDisplayHeight - 10; // -10 is for css borders :-(
        }
        this.scanAreaDisplayLeft = dragEndLeft;
        this.scanAreaDisplayTop = dragEndTop;
        this.positionResizeHandle();
    };
    DefineScanAreaComponent.prototype.resizeDragStart = function (e) {
        this._startDragX = e.clientX;
        this._startdragY = e.clientY;
    };
    DefineScanAreaComponent.prototype.resizeDragEnd = function (e) {
        var dragEndWidth = this.scanAreaDisplayWidth - this._startDragX + e.clientX;
        var dragEndHeight = this.scanAreaDisplayHeight - this._startdragY + e.clientY;
        if (this.scanAreaDisplayLeft + dragEndWidth > this.videoDisplayWidth + this.videoDisplayLeft) {
            dragEndWidth = this.videoDisplayLeft + this.videoDisplayWidth - this.scanAreaDisplayLeft - 10;
            // -10 is to allow for CSS borders :-(
        }
        if (this.scanAreaDisplayTop + dragEndHeight > this.videoDisplayHeight + this.videoDisplayTop) {
            dragEndHeight = this.videoDisplayTop + this.videoDisplayHeight - this.scanAreaDisplayTop - 10;
            // -10 is to allow for CSS borders :-(
        }
        this.scanAreaDisplayWidth = dragEndWidth;
        this.scanAreaDisplayHeight = dragEndHeight;
        this.positionResizeHandle();
    };
    DefineScanAreaComponent.prototype.nextStep = function () {
        this.sesVideoScannerService.scanAreaDisplayTop = this.scanAreaDisplayTop;
        this.sesVideoScannerService.scanAreaDisplayLeft = this.scanAreaDisplayLeft;
        this.sesVideoScannerService.scanAreaDisplayWidth = this.scanAreaDisplayWidth + 10; // to allow for border
        this.sesVideoScannerService.scanAreaDisplayHeight = this.scanAreaDisplayHeight + 10; // to allow for border
        this.router.navigate(['/app-do-scan']);
    };
    DefineScanAreaComponent.prototype.positionResizeHandle = function () {
        this.resizeHandleLeft = this.scanAreaDisplayLeft + this.scanAreaDisplayWidth;
        this.resizeHandleTop = this.scanAreaDisplayTop + this.scanAreaDisplayHeight;
    };
    DefineScanAreaComponent.prototype.changeSlide = function (n) {
        localStorage.setItem('scanIncrement', n);
        this.sesVideoScannerService.scanIncrement = parseInt(n, 10);
    };
    DefineScanAreaComponent.prototype.getScanIncrementText = function () {
        switch (this.sesVideoScannerService.scanIncrement) {
            case 1:
                return 'Scan steps: High';
            case 2:
                return 'Scan steps: Medium';
            case 3:
                return 'Scan steps: Low';
        }
    };
    return DefineScanAreaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], DefineScanAreaComponent.prototype, "imgElement", void 0);
DefineScanAreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-define-scan-area',
        template: __webpack_require__(217)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DefineScanAreaComponent);

var _a, _b, _c;
//# sourceMappingURL=defineScanArea.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineVideoSizeAndStartPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefineVideoSizeAndStartPointComponent = (function () {
    function DefineVideoSizeAndStartPointComponent(sesVideoScannerService, router) {
        this.sesVideoScannerService = sesVideoScannerService;
        this.router = router;
        this.sesVideoLoaded = false;
        this.videoDisplayWidth = sesVideoScannerService.videoDisplayWidth;
        this.videoDisplayHeight = sesVideoScannerService.videoDisplayHeight;
        this.videoDisplayTop = sesVideoScannerService.videoDisplayTop;
        this.videoDisplayLeft = sesVideoScannerService.videoDisplayLeft;
        this.scanAreaDisplayTop = sesVideoScannerService.scanAreaDisplayTop;
        this.scanAreaDisplayLeft = sesVideoScannerService.scanAreaDisplayLeft;
        this.scanAreaDisplayWidth = sesVideoScannerService.scanAreaDisplayWidth;
        this.scanAreaDisplayHeight = sesVideoScannerService.scanAreaDisplayHeight;
    }
    DefineVideoSizeAndStartPointComponent.prototype.changeSlide = function (w) {
        this.videoDisplayWidth = parseInt(w, 10);
        this.videoDisplayHeight = this.sesVideoScannerService.videoActualHeight *
            (this.videoDisplayWidth / this.sesVideoScannerService.videoActualWidth);
    };
    DefineVideoSizeAndStartPointComponent.prototype.getText = function () {
        return 'Resize the video using the slider. ' +
            'Navigate to where the camera is correctly in position and from where scanning will commence.Press "Next".';
    };
    DefineVideoSizeAndStartPointComponent.prototype.ngOnInit = function () {
        var l = localStorage.getItem('videoDisplayWidth');
        if (l === null) {
            this.videoDisplayWidth = 600;
        }
        else {
            this.videoDisplayWidth = parseInt(l, 10);
            this.inputSlideVideoSize.nativeElement.value = l;
        }
        this.videoDisplayLeft = 500;
        this.videoDisplayTop = 100;
    };
    DefineVideoSizeAndStartPointComponent.prototype.ngAfterViewChecked = function () {
        if (this.sesVideoLoaded === false) {
            this.videoNode.nativeElement.src = this.sesVideoScannerService.sesVideos[0].fileURL;
            this.sesVideoLoaded = true;
        }
    };
    DefineVideoSizeAndStartPointComponent.prototype.videoLoaded = function () {
        this.sesVideoScannerService.videoActualHeight = this.videoNode.nativeElement.videoHeight;
        this.sesVideoScannerService.videoActualWidth = this.videoNode.nativeElement.videoWidth;
        this.videoDisplayHeight = this.videoNode.nativeElement.videoHeight *
            (this.videoDisplayWidth / this.videoNode.nativeElement.videoWidth);
    };
    DefineVideoSizeAndStartPointComponent.prototype.nextStep = function () {
        this.saveVideoImage();
        this.sesVideoScannerService.videoDisplayWidth = this.videoDisplayWidth;
        localStorage.setItem('videoDisplayWidth', this.videoDisplayWidth.toString());
        this.sesVideoScannerService.videoDisplayHeight = this.videoDisplayHeight;
        this.sesVideoScannerService.videoDisplayTop = this.videoDisplayTop;
        this.sesVideoScannerService.videoDisplayLeft = this.videoDisplayLeft;
        this.sesVideoScannerService.scanAreaDisplayTop = this.scanAreaDisplayTop;
        this.sesVideoScannerService.scanAreaDisplayLeft = this.scanAreaDisplayLeft;
        this.sesVideoScannerService.scanAreaDisplayWidth = this.scanAreaDisplayWidth;
        this.sesVideoScannerService.scanAreaDisplayHeight = this.scanAreaDisplayHeight;
        this.router.navigate(['/app-define-scan-area']);
    };
    DefineVideoSizeAndStartPointComponent.prototype.saveVideoImage = function () {
        var context = this.canvasNode.nativeElement.getContext('2d');
        context.drawImage(this.videoNode.nativeElement, 0, 0, this.videoDisplayWidth, this.videoDisplayHeight);
        this.sesVideoScannerService.sesVideos[0].startPositionImage = this.canvasNode.nativeElement.toDataURL('image/png');
        this.sesVideoScannerService.sesVideos[0].startPosition = this.videoNode.nativeElement.currentTime;
    };
    DefineVideoSizeAndStartPointComponent.prototype.useNextVideo = function () {
        this.sesVideoScannerService.sesVideos.shift();
        this.videoNode.nativeElement.src = this.sesVideoScannerService.sesVideos[0].fileURL;
    };
    DefineVideoSizeAndStartPointComponent.prototype.laterVideoExists = function () {
        if (this.sesVideoScannerService.sesVideos.length > 1) {
            return true;
        }
        else {
            return false;
        }
    };
    return DefineVideoSizeAndStartPointComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('videoNode'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], DefineVideoSizeAndStartPointComponent.prototype, "videoNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvasNode'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], DefineVideoSizeAndStartPointComponent.prototype, "canvasNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('inputSlideVideoSize'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], DefineVideoSizeAndStartPointComponent.prototype, "inputSlideVideoSize", void 0);
DefineVideoSizeAndStartPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-define-video-size-and-start-point',
        template: __webpack_require__(218)
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], DefineVideoSizeAndStartPointComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=defineVideoSizeAndStartPoint.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_SESIncident__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoScanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoScanComponent = (function () {
    function DoScanComponent(sesVideoScannerService, router) {
        this.sesVideoScannerService = sesVideoScannerService;
        this.router = router;
        this.showResultsButton = false;
        this._sesVideoLoaded = false;
        switch (this.sesVideoScannerService.scanIncrement) {
            case 1:
                this.displayText = 'Scanning in Progress (High)';
                break;
            case 2:
                this.displayText = 'Scanning in Progress (Medium)';
                break;
            case 3:
                this.displayText = 'Scanning in Progress (Low)';
                break;
        }
        this.videoDisplayWidth = sesVideoScannerService.videoDisplayWidth;
        this.videoDisplayHeight = sesVideoScannerService.videoDisplayHeight;
        this.videoDisplayTop = sesVideoScannerService.videoDisplayTop;
        this.videoDisplayLeft = sesVideoScannerService.videoDisplayLeft;
        this.scanAreaDisplayWidth = sesVideoScannerService.scanAreaDisplayWidth;
        this.scanAreaDisplayHeight = sesVideoScannerService.scanAreaDisplayHeight;
        this.scanAreaDisplayTop = sesVideoScannerService.scanAreaDisplayTop;
        this.scanAreaDisplayLeft = sesVideoScannerService.scanAreaDisplayLeft;
        this._lastIterationMovementDetected = 0;
        this._captureIteration = 0;
        this.showCompareImages = sesVideoScannerService.showCompareImages;
    }
    DoScanComponent.prototype.getFiles = function () {
        return this.sesVideoScannerService.sesVideos;
    };
    DoScanComponent.prototype.ngAfterViewChecked = function () {
        if (this._sesVideoLoaded === false) {
            this._canvasArray = new Array();
            this._canvasArray[0] = this.canvas1.nativeElement;
            this._canvasArray[1] = this.canvas2.nativeElement;
            this._canvasArray[2] = this.canvas3.nativeElement;
            this._canvasArray[0].height = this.sesVideoScannerService.getScanAreaActualHeight;
            this._canvasArray[0].width = this.sesVideoScannerService.getScanAreaActualWidth;
            this._canvasArray[1].height = this.sesVideoScannerService.getScanAreaActualHeight;
            this._canvasArray[1].width = this.sesVideoScannerService.getScanAreaActualWidth;
            this._canvasArray[2].height = this.sesVideoScannerService.getScanAreaActualHeight;
            this._canvasArray[2].width = this.sesVideoScannerService.getScanAreaActualWidth;
            this._canvasTime = this.canvasTime.nativeElement;
            this._ctxArray = new Array();
            this._ctxArray[0] = this._canvasArray[0].getContext('2d');
            this._ctxArray[1] = this._canvasArray[1].getContext('2d');
            this._ctxArray[2] = this._canvasArray[2].getContext('2d');
            this._ctxTime = this.canvasTime.nativeElement.getContext('2d');
            this._imgImageArray = new Array();
            this._imgImageArray[0] = this.imgImageCurrent.nativeElement;
            this._imgImageArray[1] = this.imgImageCurrentMinusOne.nativeElement;
            this._imgImageArray[2] = this.imgImageCurrentMinusTwo.nativeElement;
            this._imageArray = new Array();
            this.loadVideo();
            this._sesVideoLoaded = true;
        }
    };
    DoScanComponent.prototype.loadVideo = function () {
        for (var _i = 0, _a = this.sesVideoScannerService.sesVideos; _i < _a.length; _i++) {
            var vid = _a[_i];
            if (vid.scanned === false) {
                this._loadingVideo = true;
                this.videoNode.nativeElement.src = vid.fileURL;
                this._selectedVideo = vid;
                return true;
            }
        }
        return false;
    };
    DoScanComponent.prototype.videoLoaded = function () {
        if (this._loadingVideo === true) {
            this._loadingVideo = false;
        }
        else {
            return;
        }
        this.videoNode.nativeElement.currentTime = this._selectedVideo.startPosition;
        this.scanVideo();
    };
    DoScanComponent.prototype.scanVideo = function () {
        var _this = this;
        this._selectedVideo.scanning = true;
        this._runningIntervalID = setInterval(function () { return _this.doScanIteration(); }, this.sesVideoScannerService.scanIterationTimer);
    };
    DoScanComponent.prototype.stopScan = function () {
        clearInterval(this._runningIntervalID);
        this._selectedVideo.scanned = true;
        this._selectedVideo.scanning = false;
        this.scanCompleted();
    };
    DoScanComponent.prototype.doScanIteration = function () {
        if (this._doingIteration === true) {
            return;
        }
        this._doingIteration = true;
        this._movementDetectedThisIteration = true;
        if (this._captureIteration > 1) {
            this.cloneImage(2);
        }
        if (this._captureIteration > 0) {
            this.cloneImage(1);
        }
        this.captureImage();
        if (this._captureIteration > 0) {
            this.percentageMovementImageCurrent = this.compareImage(0, 1).toString();
        }
        if (this._captureIteration > 1) {
            this.percentageMovementImageCurrentMinusOne = this.compareImage(1, 2).toString();
            this.percentageMovementImageCurrentMinusTwo = this.compareImage(2, 0).toString();
        }
        if (this._movementDetectedThisIteration === true) {
            if (this._captureIteration - this._lastIterationMovementDetected > this.sesVideoScannerService.minIntervalBetweenIncidents) {
                this._lastIterationMovementDetected = this._captureIteration;
                var i = new __WEBPACK_IMPORTED_MODULE_4__model_SESIncident__["a" /* SESIncident */]();
                i.time = this.videoNode.nativeElement.currentTime;
                i.image = this._imageArray[0];
                i.imagePrev1 = this._imageArray[1];
                i.imagePrev2 = this._imageArray[2];
                i.videoFileName = this._selectedVideo.fileName;
                this._canvasTime.height = 18;
                this._canvasTime.width = 100;
                this._ctxTime.drawImage(this.videoNode.nativeElement, 100, this.sesVideoScannerService.videoActualHeight - 18, 100, 18, 0, 0, 100, 18);
                i.imageTime = this._canvasTime.toDataURL('image/png');
                this._selectedVideo.incidents.push(i);
            }
        }
        this.videoNode.nativeElement.currentTime = this.videoNode.nativeElement.currentTime + this.sesVideoScannerService.scanIncrement;
        this._captureIteration++;
        if (this.videoNode.nativeElement.ended) {
            clearInterval(this._runningIntervalID);
            this._selectedVideo.scanned = true;
            this._selectedVideo.scanning = false;
            if (this.loadVideo() === false) {
                this.scanCompleted();
            }
        }
        if (this.showCompareImages === true) {
            clearInterval(this._runningIntervalID);
        }
        this._doingIteration = false;
    };
    DoScanComponent.prototype.cloneImage = function (imageIndex) {
        this._canvasArray[imageIndex].width = this.sesVideoScannerService.getScanAreaActualWidth();
        this._canvasArray[imageIndex].height = this.sesVideoScannerService.getScanAreaActualHeight();
        this._ctxArray[imageIndex].drawImage(this._canvasArray[imageIndex - 1], 0, 0);
        this._imageArray[imageIndex] = this._canvasArray[imageIndex].toDataURL('image/png');
        this._imgImageArray[imageIndex].width = 100;
        this._imgImageArray[imageIndex].src = this._imageArray[imageIndex];
    };
    DoScanComponent.prototype.captureImage = function () {
        this._canvasArray[0].width = this.sesVideoScannerService.getScanAreaActualWidth();
        this._canvasArray[0].height = this.sesVideoScannerService.getScanAreaActualHeight();
        this._ctxArray[0].drawImage(this.videoNode.nativeElement, this.sesVideoScannerService.getScanAreaActualLeft(), this.sesVideoScannerService.getScanAreaActualTop(), this.sesVideoScannerService.getScanAreaActualWidth(), this.sesVideoScannerService.getScanAreaActualHeight(), 0, 0, this.sesVideoScannerService.getScanAreaActualWidth(), this.sesVideoScannerService.getScanAreaActualHeight());
        this._imageArray[0] = this._canvasArray[0].toDataURL('image/png');
        this._imgImageArray[0].width = 100;
        this._imgImageArray[0].src = this._imageArray[0];
    };
    DoScanComponent.prototype.comparePixel = function (p1, p2) {
        var matches = true;
        for (var i = 0; i < p1.length; i++) {
            var t1 = Math.round(p1[i] / 10) * 10;
            var t2 = Math.round(p2[i] / 10) * 10;
            if (t1 !== t2) {
                if ((t1 + 50) < t2 || (t1 - 50) > t2) {
                    matches = false;
                }
            }
        }
        return matches;
    };
    DoScanComponent.prototype.compareImage = function (imageIndex, imageIndex2) {
        var noMovementCount = 0;
        var movementCount = 0;
        var percentageMovement = 0;
        for (var y = 0; y < this.sesVideoScannerService.getScanAreaActualHeight(); y = y + 5) {
            for (var x = 0; x < this.sesVideoScannerService.getScanAreaActualWidth(); x = x + 5) {
                var pixel1 = this._ctxArray[imageIndex].getImageData(x, y, 1, 1);
                var pixel1Data = pixel1.data;
                var pixel2 = this._ctxArray[imageIndex2].getImageData(x, y, 1, 1);
                var pixel2Data = pixel2.data;
                if (this.comparePixel(pixel1Data, pixel2Data) === false) {
                    movementCount++;
                }
                else {
                    noMovementCount++;
                }
            }
        }
        percentageMovement = 100 * (movementCount / (noMovementCount + movementCount));
        if (percentageMovement < 0.25) {
            this._movementDetectedThisIteration = false;
        }
        return percentageMovement;
    };
    ;
    DoScanComponent.prototype.setCompareTopLeft = function (iArray, x, y) {
        if (x < iArray[0]) {
            iArray[0] = x;
        }
        if (y < iArray[1]) {
            iArray[1] = y;
        }
    };
    DoScanComponent.prototype.setCompareBottomRight = function (iArray, x, y) {
        if (x > iArray[0]) {
            iArray[0] = [x];
        }
        if (y > iArray[1]) {
            iArray[1] = [y];
        }
    };
    DoScanComponent.prototype.scanCompleted = function () {
        this.displayText = 'Scanning Completed';
        this.showResultsButton = true;
    };
    DoScanComponent.prototype.nextStep = function () {
        this.router.navigate(['/app-show-results']);
    };
    return DoScanComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('videoNode'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], DoScanComponent.prototype, "videoNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvas1'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], DoScanComponent.prototype, "canvas1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvas2'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], DoScanComponent.prototype, "canvas2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvas3'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object)
], DoScanComponent.prototype, "canvas3", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvasTime'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object)
], DoScanComponent.prototype, "canvasTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgImageCurrent'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _f || Object)
], DoScanComponent.prototype, "imgImageCurrent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgImageCurrentMinusOne'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _g || Object)
], DoScanComponent.prototype, "imgImageCurrentMinusOne", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('imgCurrentMinusTwo'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _h || Object)
], DoScanComponent.prototype, "imgImageCurrentMinusTwo", void 0);
DoScanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-do-scan',
        template: __webpack_require__(219)
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _k || Object])
], DoScanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=doScan.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(sesVideoScannerService, router) {
        this.sesVideoScannerService = sesVideoScannerService;
        this.router = router;
        this.title = 'SES Video Scanner';
    }
    HeaderComponent.prototype.clickHome = function () {
        this.router.navigate(['/']);
        window.location.reload();
    };
    HeaderComponent.prototype.clickSettings = function () {
        this.router.navigate(['/app-settings']);
    };
    HeaderComponent.prototype.getBrowserCompatability = function () {
        if (this.sesVideoScannerService.browserCompatable) {
            return true;
        }
        else {
            return false;
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(220)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SESIncident; });
var SESIncident = (function () {
    function SESIncident() {
        this.displayState = 'inactive';
    }
    SESIncident.prototype.getMinutes = function () {
        return Math.floor(parseInt(this.time, 10) / 60);
    };
    SESIncident.prototype.getSeconds = function () {
        return parseInt(this.time, 10) - (this.getMinutes() * 60);
    };
    return SESIncident;
}());

//# sourceMappingURL=SESIncident.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SESVideo; });
var SESVideo = (function () {
    function SESVideo() {
        this.startPosition = 0; // the first video may include some setting up footage
        this.scanned = false;
        this.scanning = false;
        this.incidents = new Array();
    }
    SESVideo.prototype.getIncidentCount = function () {
        return this.incidents.length;
    };
    return SESVideo;
}());

//# sourceMappingURL=SESVideo.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_SESVideo__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectVideoFilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectVideoFilesComponent = (function () {
    function SelectVideoFilesComponent(s, router, http) {
        var _this = this;
        this.s = s;
        this.router = router;
        this.http = http;
        this._fileNumber = 0;
        this._videoFiles = [];
        this.finishedLoading = false;
        this.loggingIn = false;
        if (!s.sesEmployee) {
            var key = localStorage.getItem('keyString');
            s.checkLastLogIn(key)
                .subscribe(function (emp) {
                s.sesEmployee = emp;
                s.persistUserDetails(emp);
                s.loggedIn = true;
                _this.loggingIn = false;
            }, function (err) {
                s.loggedIn = false;
                _this.loggingIn = false;
                _this.errorDisplayText = err;
            });
        }
    }
    SelectVideoFilesComponent.prototype.getDisplayText = function () {
        if (!this.getBrowserCompatability()) {
            return 'This application is designed for the Chrome Browser only. Please change browser.';
        }
        if (!this.s.loggedIn) {
            return 'Please log in to use the SES Video Scanner';
        }
        if (this.filesLoaded()) {
            return 'Press Continue to move to the next step or Cancel to reselect files';
        }
        return 'Use the browse button to select video files for scanning';
    };
    SelectVideoFilesComponent.prototype.clickInputFileControl = function () {
        this.finishedLoading = false;
        this.fileInput.click();
    };
    SelectVideoFilesComponent.prototype.onFileInputChange = function () {
        var fi = this.fileInput.nativeElement;
        this._videoFiles = fi.files;
        this.loadVideos();
    };
    SelectVideoFilesComponent.prototype.getButtonState = function (button) {
        var rv = false;
        switch (button) {
            case 'cancel':
                if (this.filesLoaded() && this.s.loggedIn) {
                    rv = true;
                }
                else {
                    rv = false;
                }
                break;
            case 'browseforfiles':
                if (this.filesLoaded()) {
                    rv = false;
                }
                else if (this.s.loggedIn) {
                    rv = true;
                }
                else {
                    rv = false;
                }
                break;
            case 'continue':
                if (this.filesLoaded() && this.s.loggedIn && this.finishedLoading) {
                    rv = true;
                }
                else {
                    rv = false;
                }
                break;
            case 'login':
                if (this.s.loggedIn) {
                    rv = false;
                }
                else {
                    rv = true;
                }
                break;
        }
        return rv;
    };
    SelectVideoFilesComponent.prototype.getFiles = function () {
        return (this._videoFiles);
    };
    SelectVideoFilesComponent.prototype.filesLoaded = function () {
        return (this._videoFiles.length > 0);
    };
    SelectVideoFilesComponent.prototype.nextStep = function () {
        this.router.navigate(['/app-define-video-size-and-start-point']);
    };
    SelectVideoFilesComponent.prototype.logIn = function () {
        var _this = this;
        var v = this.inputPassword.nativeElement.value;
        var s = this.s;
        if (!this.loggingIn && v) {
            this.loggingIn = true;
            s.callLogInService(v)
                .subscribe(function (emp) {
                s.sesEmployee = emp;
                s.persistUserDetails(emp);
                s.loggedIn = true;
                _this.loggingIn = false;
            }, function (err) {
                s.loggedIn = false;
                _this.loggingIn = false;
                _this.errorDisplayText = err;
            });
        }
    };
    SelectVideoFilesComponent.prototype.checkForLogInEnter = function (e) {
        if (e === 13) {
            this.logIn();
        }
    };
    SelectVideoFilesComponent.prototype.loadVideos = function () {
        if (this._videoFiles.length < this._fileNumber + 1) {
            this.finishedLoading = true;
            return;
        }
        var file = this._videoFiles[this._fileNumber];
        this._fileURL = URL.createObjectURL(file);
        this._fileName = file.name;
        this.videoLoadStatusText = 'loading videos please be patient (video ' + this._fileName + ')';
        this._videoLoading = this._fileName;
        this.videoNode.nativeElement.src = this._fileURL;
    };
    SelectVideoFilesComponent.prototype.videoLoaded = function () {
        if (this._videoLoading === this._fileName) {
            var sesVideo = new __WEBPACK_IMPORTED_MODULE_6__model_SESVideo__["a" /* SESVideo */];
            sesVideo.duration = this.videoNode.nativeElement.duration;
            sesVideo.fileURL = this._fileURL;
            sesVideo.fileName = this._fileName;
            this.s.sesVideos.push(sesVideo);
            this._videoLoading = '';
            this._fileNumber++;
            this.loadVideos();
        }
    };
    SelectVideoFilesComponent.prototype.getBrowserCompatability = function () {
        if (this.s.browserCompatable) {
            return true;
        }
        else {
            return false;
        }
    };
    return SelectVideoFilesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], SelectVideoFilesComponent.prototype, "fileInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('videoNode'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], SelectVideoFilesComponent.prototype, "videoNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('inputPassword'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], SelectVideoFilesComponent.prototype, "inputPassword", void 0);
SelectVideoFilesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-select-video-files',
        template: __webpack_require__(221),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _e || Object])
], SelectVideoFilesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=selectVideoFiles.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(sesVideoScannerService, router) {
        this.sesVideoScannerService = sesVideoScannerService;
        this.router = router;
        this.displayText = 'Settings will be saved for future use on this computer';
    }
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__(222),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsFormComponent = (function () {
    function SettingsFormComponent(sesVideoScanningService, fb, router) {
        this.sesVideoScanningService = sesVideoScanningService;
        this.router = router;
        this.complexForm = fb.group({
            'minIntervalBetweenIncidents': '',
            'scanIterationTimer': '',
            'showCompareImages': ''
        });
        this.minIntervalBetweenIncidents = this.sesVideoScanningService.minIntervalBetweenIncidents;
        this.showCompareImages = this.sesVideoScanningService.showCompareImages;
        this.scanIterationTimer = this.sesVideoScanningService.scanIterationTimer;
    }
    SettingsFormComponent.prototype.submitSettingsForm = function (value) {
        this.sesVideoScanningService.setMinIntervalBetweenIncidents(value.minIntervalBetweenIncidents);
        this.sesVideoScanningService.setShowCompareImages(value.showCompareImages);
        this.sesVideoScanningService.setScanIterationTimer(value.scanIterationTimer);
        this.router.navigate(['/']);
        window.location.reload();
    };
    return SettingsFormComponent;
}());
SettingsFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-settings-form',
        template: __webpack_require__(223)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SettingsFormComponent);

var _a, _b, _c;
//# sourceMappingURL=settingsForm.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowResultsComponent = (function () {
    function ShowResultsComponent(sesVideoScannerService, router) {
        this.sesVideoScannerService = sesVideoScannerService;
        this.router = router;
        this.allVideos = this.sesVideoScannerService.sesVideos;
        this.videoDisplayWidth = sesVideoScannerService.videoDisplayWidth;
        this.videoDisplayHeight = sesVideoScannerService.videoDisplayHeight;
        this.videoDisplayTop = sesVideoScannerService.videoDisplayTop;
        this.videoDisplayLeft = sesVideoScannerService.videoDisplayLeft;
        this.displayText = 'Incidents are listed below.';
        this.displayText2 = 'Click on the button the play the incident (or the time for a still image)';
        this._initialising = true;
    }
    ShowResultsComponent.prototype.ngOnInit = function () {
        if (this._initialising) {
            this.showVideoAndPause(this.sesVideoScannerService.sesVideos[0].fileName, this.sesVideoScannerService.sesVideos[0].startPosition);
        }
        this._initialising = false;
    };
    ShowResultsComponent.prototype.showVideoAndPause = function (vid, pos) {
        for (var i = 0; i < this.sesVideoScannerService.sesVideos.length; i++) {
            if (this.sesVideoScannerService.sesVideos[i].fileName === vid) {
                this.videoPos = pos;
                this.videoNode.nativeElement.src = this.sesVideoScannerService.sesVideos[i].fileURL;
                this.currentlyPlayingVideoName = this.sesVideoScannerService.sesVideos[i].fileName;
                this._currentSESVideo = this.sesVideoScannerService.sesVideos[i];
                this.videoPlay = false;
            }
        }
    };
    ShowResultsComponent.prototype.showVideoAndPlay = function (vid, pos) {
        for (var i = 0; i < this.sesVideoScannerService.sesVideos.length; i++) {
            if (this.sesVideoScannerService.sesVideos[i].fileName === vid) {
                this.videoPos = this.sendVideoBackSlightly(pos);
                this.videoNode.nativeElement.src = this.sesVideoScannerService.sesVideos[i].fileURL;
                this.currentlyPlayingVideoName = this.sesVideoScannerService.sesVideos[i].fileName;
                this._currentSESVideo = this.sesVideoScannerService.sesVideos[i];
                this.videoPlay = true;
            }
        }
    };
    ShowResultsComponent.prototype.videoLoaded = function () {
        this.videoNode.nativeElement.currentTime = this.videoPos;
        if (this.videoPlay) {
            this.videoNode.nativeElement.play();
        }
        else {
            this.videoNode.nativeElement.pause();
        }
    };
    ShowResultsComponent.prototype.sendVideoBackSlightly = function (pos) {
        if (pos > 2) {
            return (pos - 3);
        }
        else {
            return 0;
        }
    };
    return ShowResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('videoNode'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], ShowResultsComponent.prototype, "videoNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('playSlider'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], ShowResultsComponent.prototype, "playSlider", void 0);
ShowResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-show-results',
        template: __webpack_require__(224),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* trigger */])('selectedIncident', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* style */])({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* style */])({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SESVideoScanner_service__["a" /* SESVideoScannerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ShowResultsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=showResults.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SESVideoScannerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SESVideoScannerService = (function () {
    function SESVideoScannerService(http) {
        this.http = http;
        this.sesVideos = [];
        this.loggedIn = false;
        this.browserCompatable = true; // must be Chrome - checked in header component.
        this.baseUrl = 'http://www.video-scanner.com';
        if (localStorage.getItem('minIntervalBetweenIncidents') === null) {
            this.minIntervalBetweenIncidents = 5;
        }
        else {
            this.minIntervalBetweenIncidents = parseInt(localStorage.getItem('minIntervalBetweenIncidents'), 10);
        }
        if (localStorage.getItem('scanIterationTimer') === null) {
            this.scanIterationTimer = 125;
        }
        else {
            this.scanIterationTimer = parseInt(localStorage.getItem('scanIterationTimer'), 10);
        }
        if (localStorage.getItem('playSpeedFactor') === null) {
            this.playSpeedFactor = 5;
        }
        else {
            this.playSpeedFactor = parseInt(localStorage.getItem('playSpeedFactor'), 10);
        }
        if (localStorage.getItem('showCompareImages') === null) {
            this.showCompareImages = false;
        }
        else {
            if (localStorage.getItem('showCompareImages') === 'true') {
                this.showCompareImages = true;
            }
            else {
                this.showCompareImages = false;
            }
        }
    }
    SESVideoScannerService.prototype.getDisplayFactor = function () {
        return this.videoDisplayWidth / this.videoActualWidth;
    };
    SESVideoScannerService.prototype.getScanAreaActualTop = function () {
        return (this.scanAreaDisplayTop - this.videoDisplayTop) / this.getDisplayFactor();
    };
    SESVideoScannerService.prototype.getScanAreaActualLeft = function () {
        return (this.scanAreaDisplayLeft - this.videoDisplayLeft) / this.getDisplayFactor();
    };
    SESVideoScannerService.prototype.getScanAreaActualWidth = function () {
        return this.scanAreaDisplayWidth / this.getDisplayFactor();
    };
    SESVideoScannerService.prototype.getScanAreaActualHeight = function () {
        return this.scanAreaDisplayHeight / this.getDisplayFactor();
    };
    SESVideoScannerService.prototype.getAllIncidents = function () {
        var ia = new Array();
        for (var _i = 0, _a = this.sesVideos; _i < _a.length; _i++) {
            var vid = _a[_i];
            for (var _b = 0, _c = vid.incidents; _b < _c.length; _b++) {
                var inc = _c[_b];
                ia.push(inc);
            }
        }
        return ia;
    };
    SESVideoScannerService.prototype.setScanIterationTimer = function (value) {
        this.scanIterationTimer = value;
        localStorage.setItem('scanIterationTimer', value.toString());
    };
    SESVideoScannerService.prototype.setMinIntervalBetweenIncidents = function (value) {
        this.minIntervalBetweenIncidents = value;
        localStorage.setItem('minIntervalBetweenIncidents', value.toString());
    };
    SESVideoScannerService.prototype.setPlaySpeedFactor = function (value) {
        this.playSpeedFactor = value;
        localStorage.setItem('playSpeedFactor', value.toString());
    };
    SESVideoScannerService.prototype.setShowCompareImages = function (value) {
        this.showCompareImages = value;
        localStorage.setItem('showCompareImages', value.toString());
    };
    SESVideoScannerService.prototype.getLogInStatusText = function () {
        if (this.loggedIn === true) {
            return this.sesEmployee.first_name + ' ' + this.sesEmployee.last_name + ' / ' +
                this.sesEmployee.organisation_name;
        }
        else {
            return '';
        }
    };
    SESVideoScannerService.prototype.persistUserDetails = function (e) {
        this.sesEmployee = e;
        localStorage.setItem('keyString', e.keyString);
    };
    SESVideoScannerService.prototype.callLogInService = function (password) {
        var _this = this;
        return this.http
            .get(this.baseUrl + '/auth/login/' + password)
            .map(function (res) {
            return _this.toSESEmployee(res);
        })
            .catch(function (e) {
            if (e.status === 401) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Password not recognised');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
            }
        });
    };
    SESVideoScannerService.prototype.toSESEmployee = function (r) {
        var j = r.json();
        var sesEmployee = ({
            employee_pk: j.employee_pk,
            first_name: j.first_name,
            last_name: j.last_name,
            organisation_pk: j.organisation_pk,
            organisation_name: j.organisation_name,
            keyString: j.keyString
        });
        return sesEmployee;
    };
    SESVideoScannerService.prototype.checkLastLogIn = function (key) {
        var _this = this;
        return this.http
            .get(this.baseUrl + '/auth/validate/' + key)
            .map(function (res) {
            return _this.toSESEmployee(res);
        })
            .catch(function (e) {
            if (e.status === 401) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
            }
        });
    };
    return SESVideoScannerService;
}());
SESVideoScannerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SESVideoScannerService);

var _a;
//# sourceMappingURL=SESVideoScanner.service.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"mother\">\r\n        <div class=\"leftColumn\">\r\n            <h2>\r\n                {{getText()}} <br /><br />\r\n            </h2>\r\n            <br />\r\n            <br />\r\n            <br />\r\n            <br />\r\n            <br />\r\n            <div><button (click)=\"nextStep()\">Next</button></div>\r\n            <br />\r\n            <br />\r\n            <br />\r\n            <br />\r\n            <div><input [(ngModel)]=\"sesVideoScannerService.scanIncrement\" style=\"width:90px\" #inputSlideScanIncrement type=\"range\" min=\"1\" max=\"3\" step=\"1\" (change)=\"changeSlide(inputSlideScanIncrement.value)\" /></div>\r\n            <br />\r\n            {{getScanIncrementText()}}\r\n        </div>\r\n        <div style=\"width: 100px\">\r\n        </div>\r\n        <div class=\"rightColumn\">\r\n            <div draggable=\"true\" (dragstart)=\"dragStart($event)\" (dragend)=\"dragEnd($event)\" style.width=\"{{scanAreaDisplayWidth}}px\" style.height=\"{{scanAreaDisplayHeight}}px\" style.top=\"{{scanAreaDisplayTop}}px\" style.left=\"{{scanAreaDisplayLeft}}px\" class=\"scanArea\"></div>\r\n            <div draggable=\"true\" (dragstart)=\"resizeDragStart($event)\" (dragend)=\"resizeDragEnd($event)\" style=\"width: 30px; height: 30px\" style.top=\"{{resizeHandleTop}}px\" style.left=\"{{resizeHandleLeft}}px\" class=\"resizeArea\"></div>\r\n            <div style.top=\"{{videoDisplayTop}}px\" style.left=\"{{videoDisplayLeft}}px\" class=\"videoDiv\">\r\n                <img #imgElement src=\"{{getImage()}}\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"mother\">\r\n        <div class=\"leftColumn\">\r\n            <h2>\r\n               {{getText()}} <br /><br />\r\n            </h2>\r\n            <input style=\"width:400px\" #inputSlideVideoSize type=\"range\" min=\"100\" max=\"1100\" (change)=\"changeSlide(inputSlideVideoSize.value)\" />\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n            <div><button (click)=\"nextStep()\">Next</button></div><br />\r\n            <div *ngIf=\"laterVideoExists()\"><button (click)=\"useNextVideo()\">Start at next video</button></div>\r\n            <br/>\r\n            <br/>\r\n          </div>\r\n        <div style =\"width: 100px\">\r\n        </div>\r\n        <div class=\"rightColumn\">\r\n            <div style.top=\"{{videoDisplayTop}}px\" style.left=\"{{videoDisplayLeft}}px\" class=\"videoDiv\">    \r\n                <video #videoNode (loadedmetadata)=\"videoLoaded()\" style.width.px={{videoDisplayWidth}} style.height.px={{videoDisplayHeight+75}} controls preload=\"auto\"></video>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n    <div style.position=\"fixed\">\r\n        <canvas #canvasNode width=\"{{videoDisplayWidth}}\" height=\"{{videoDisplayHeight}}\"></canvas>\r\n    </div>\r\n</main>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"mother\">\r\n        <div class=\"leftColumn\">\r\n            <h2>\r\n                {{displayText}}\r\n            </h2>\r\n            <br />\r\n            <br />\r\n            <button *ngIf=\"showResultsButton==false\" (click)=\"stopScan()\">Stop Scan</button><br /><br />\r\n            <button *ngIf=\"showResultsButton==false && showCompareImages\" (click)=\"scanVideo()\">DEBUG MODE</button><br /><br />\r\n            <button *ngIf=\"showResultsButton\" (click)=\"nextStep()\">Show Results</button><br /><br />\r\n            <table>\r\n                <tr *ngFor=\"let item of getFiles()\">\r\n                    <td *ngIf=\"item?.scanned == false && item?.scanning == false\" > {{ item?.fileName }}</td>\r\n                    <td *ngIf=\"item?.scanned\"> {{ item?.fileName + \" - scanned, number of incidents: \" + item?.getIncidentCount()}}</td>  \r\n                    <td *ngIf=\"item?.scanning\"> {{ item?.fileName + \" - scanning, number of incidents: \" + item?.getIncidentCount() }}</td>  \r\n                                  \r\n                </tr>\r\n            </table>\r\n            <canvas hidden #canvas1></canvas>\r\n            <canvas hidden #canvas2></canvas>\r\n            <canvas hidden #canvas3></canvas>\r\n            <canvas hidden #canvasTime></canvas><br/>\r\n            <div [hidden]=\"!showCompareImages || showResultsButton\">\r\n                <img #imgImageCurrent /><br />%age Movement: &nbsp;{{percentageMovementImageCurrent}}<br />\r\n                <img #imgImageCurrentMinusOne /><br />%age Movement: &nbsp;{{percentageMovementImageCurrentMinusOne}}<br />\r\n                <img #imgCurrentMinusTwo /><br />%age Movement: &nbsp;{{percentageMovementImageCurrentMinusTwo}}\r\n            </div>\r\n        </div>\r\n        <div class=\"rightColumn\">\r\n            <div style.top=\"{{videoDisplayTop}}px\" style.left=\"{{videoDisplayLeft}}px\" class=\"videoDiv\">\r\n                <video #videoNode (loadedmetadata)=\"videoLoaded()\" style.width.px={{videoDisplayWidth}} style.height.px={{videoDisplayHeight}} preload=\"auto\"></video>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"mother\">\r\n        <div class=\"leftColumn\">\r\n            <h1>{{title}}</h1>\r\n        </div>\r\n        <div class=\"rightColumn\" align=\"right\">\r\n                <table>\r\n                    <tr>\r\n                        <td>{{sesVideoScannerService.getLogInStatusText()}}</td>\r\n                        <td *ngIf=\"getBrowserCompatability()\" width=\"100\" valign=\"top\"><img width=\"80\" src=\"assets/img/home.jpg\" (click)=\"clickHome()\" /></td>\r\n                        <td *ngIf=\"getBrowserCompatability()\" valign=\"top\"><img width=\"69\" src=\"assets/img/cog.png\" (click)=\"clickSettings()\" /></td>\r\n                    </tr>\r\n                </table>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"mother\">\r\n        <div class=\"leftColumn\">\r\n            <h2>\r\n                {{getDisplayText()}} <br /><br />\r\n                <input #fileInput  id=\"fileInputLocal\" type=\"file\" (change)=\"onFileInputChange()\" multiple accept=\"video/*\" style=\"visibility:hidden\" />\r\n            </h2>\r\n            <div *ngIf=\"getBrowserCompatability()\">\r\n                <div *ngIf=\"getButtonState('login')\">\r\n                    <input #inputPassword type=\"password\" maxlength=\"8\" size=\"12\" class=\"formInput\" (keypress)=\"checkForLogInEnter($event.keyCode)\" /><br /><br />\r\n                    <button (click)=\"logIn()\">Log In</button><br />\r\n                    <div class=\"userErrorWarning\"> {{errorDisplayText}} </div>\r\n                </div>\r\n                <div *ngIf=\"getButtonState('browseforfiles')\"><button onClick=\"document.getElementById('fileInputLocal').click()\">Browse for files</button></div>\r\n                <div *ngIf=\"getButtonState('continue')\"><button (click)=\"nextStep()\">Continue</button><br /><br /></div>\r\n                <div *ngIf=\"!finishedLoading\">  {{videoLoadStatusText}}<br /><br /></div>\r\n                <div *ngIf=\"getButtonState('cancel')\"><button onclick=\"location.reload()\">Cancel</button><br /><br /><br /><br /></div>\r\n                <div *ngIf=\"filesLoaded()\">\r\n                    <table>\r\n                        <tr *ngFor=\"let item of getFiles()\">\r\n                            <td><strong>{{ item?.name }}</strong></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"rightColumn\">\r\n            <div hidden>\r\n                <video #videoNode (loadedmetadata)=\"videoLoaded()\"></video>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</main>"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"mother\">\r\n        <div class=\"leftColumn\">\r\n            <h2>\r\n                {{displayText}}\r\n            </h2>\r\n        </div>\r\n        <div class=\"rightColumn\" align=\"left\">\r\n            <table>\r\n                <tr>\r\n                    <td width=\"100\"></td>\r\n                    <td>\r\n                        <app-settings-form></app-settings-form>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form [formGroup]=\"complexForm\" (ngSubmit)=\"submitSettingsForm(complexForm.value)\">\r\n        <div>\r\n            <label for=\"minIntervalBetweenIncidents\">Min Interval between Incidents (secs)</label>\r\n            <input type=\"text\" size=\"3\" maxlength=\"3\"\r\n                   required pattern=\"^([1-9][0-9]{0,2}|1000)$\"\r\n                   [formControl]=\"complexForm.controls['minIntervalBetweenIncidents']\" id=\"minIntervalBetweenIncidents\"\r\n                   [(ngModel)]=\"minIntervalBetweenIncidents\"\r\n                   /> \r\n        </div>\r\n        <div class=\"formError\" *ngIf=\"!complexForm.controls['minIntervalBetweenIncidents'].valid\">Must be a valid number</div>\r\n        <br/>\r\n\r\n        <div>\r\n            <label for=\"scanIterationTimer\">Wait time between scan iterations (milliseconds)</label>\r\n            <input type=\"text\" size=\"3\" maxlength=\"3\"\r\n                   required pattern=\"^([1-9][0-9][0-9])$\"\r\n                   [formControl]=\"complexForm.controls['scanIterationTimer']\" id=\"scanIterationTimer\"\r\n                   [(ngModel)]=\"scanIterationTimer\" />\r\n        </div>\r\n        <div class=\"formError\" *ngIf=\"!complexForm.controls['scanIterationTimer'].valid\">Must be a valid number greater than 100</div>\r\n        <br />\r\n\r\n        <div>\r\n            <label for=\"showCompareImages\">Debug Mode: &nbsp; &nbsp;</label>\r\n            False <input type=\"radio\" name=\"showCompareImages\" [formControl]=\"complexForm.controls['showCompareImages']\"\r\n                   id=\"showCompareImages\"\r\n                   [(ngModel)]=\"showCompareImages\" \r\n                   [value]=\"false\"/>\r\n\r\n            True <input type=\"radio\" name=\"showCompareImages\" [formControl]=\"complexForm.controls['showCompareImages']\"\r\n                   id=\"showCompareImages\"\r\n                   [(ngModel)]=\"showCompareImages\"\r\n                   [value]=\"true\" />\r\n        </div>\r\n        <br/>\r\n\r\n\r\n        <div><button type=\"submit\" [disabled]=\"!complexForm.valid\">Submit</button></div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "    <main>\r\n        <div class=\"mother\">\r\n            <div class=\"leftColumn\">\r\n                <h2>\r\n                    {{displayText}} <br/>\r\n                    {{displayText2}}\r\n                    <br/><br/>\r\n                </h2>\r\n                <br />\r\n                <table>\r\n                    <tr *ngFor=\"let vid of allVideos\">\r\n                        <td>\r\n                        <table>\r\n                            <tr>\r\n                                <td (click)=\"showVideoAndPlay(vid?.fileName,0)\">{{vid?.fileName}}</td>\r\n                                <td *ngIf=\"vid?.fileName == currentlyPlayingVideoName\">:  -  Playing</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let inc of vid?.incidents\">\r\n                                <td (click)=\"showVideoAndPause(vid?.fileName,inc?.time)\" ><img src=\"{{inc?.imageTime}}\" /></td>\r\n                                <td><img width=\"22\" src=\"assets/img/play.png\" (click)=\"showVideoAndPlay(vid?.fileName,inc?.time)\"/></td>\r\n                            </tr>\r\n                        </table>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"rightColumn\">\r\n                <div style.top=\"{{videoDisplayTop}}px\" style.left=\"{{videoDisplayLeft}}px\" class=\"videoDiv\">\r\n                    <video #videoNode (ended)=\"videoEnded()\" (loadedmetadata)=\"videoLoaded()\"   style.width.px={{videoDisplayWidth}} style.height.px={{videoDisplayHeight+75}} preload=\"auto\" controls></video>\r\n                    <br/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>"

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)(false);
// imports


// module
exports.push([module.i, "/* Master Styles */\r\nh1 {\r\n  color: #369; \r\n  font-family: Arial, Helvetica, sans-serif;   \r\n  font-size: 250%;\r\n}\r\nh2, h3 { \r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;   \r\n  font-weight: lighter;\r\n}\r\nbody { \r\n  margin: 2em; \r\n}\r\nbody, input[text], button { \r\n  color: #888; \r\n  font-family: Cambria, Georgia; \r\n}\r\na {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 50px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  width: 200px\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa; \r\n  cursor: auto;\r\n}\r\n\r\n/* Navigation link styles */\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.router-link-active {\r\n  color: #039be5;\r\n}\r\n\r\n/* items class */\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n  color: white;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected {\r\n  background-color: #CFD8DC;\r\n  color: white;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n/* everywhere else */\r\n* { \r\n  font-family: Arial, Helvetica, sans-serif; \r\n}\r\n\r\n\r\n/* Flex stuff */\r\n.mother {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;/* it's the same as => flex-direction: row ; flex-wrap: wrap;*/\r\n    /*\r\n     flex-direction: can accept 4 parameters :\r\n     row            => left to right (with ltr)\r\n     column         => the same this as row but Top to Buttom\r\n     row-reverse    => right to left (with ltr)\r\n     column-reverse => the same this as row-reverse (bottom to top)\r\n \r\n     flex-wrap:\r\n     wrap         => multi-line, left to right (with ltr)\r\n     nowrap       => no new line.\r\n     wrap-reverse => multi-line, right to left (with ltr)\r\n    */\r\n     -ms-flex-pack: distribute;\r\n         justify-content: space-around; /*it helps with the distribute of extra free space*/\r\n    /*\r\n     accepts 5 parameters :\r\n      flex-start    => elements grouped to the start of the line\r\n      flex-end      => elements grouped to the end of the line\r\n      center        => elements centred\r\n      space-between => first element to the start line / the end element to the end line\r\n      space-around; => equality distribution\r\n    */\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;/*align element to an extremity*/\r\n    /*\r\n    flex-start => Top\r\n    flex-end   => Bottom\r\n    center     => Center\r\n    baseline   => as Baseline\r\n    stretch    => stretch with the respect of min/max (width)\r\n    */\r\n}\r\n.leftColumn {\r\n    width: 400px;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: none;\r\n            flex: none;\r\n}\r\n\r\n.rightColumn {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: auto;\r\n            flex: auto;\r\n}\r\n\r\n.scanArea{\r\n\tposition: fixed;\r\n\tborder: 5px dashed white;\r\n\tbackground: rgba(255,255,0,0.3);\r\n    z-index: 100;\r\n}\r\n\r\n.videoDiv{\r\n    position: fixed;\r\n}\r\n\r\n.resizeArea{\r\n    position: fixed;\r\n    background-color: white;\r\n    z-index: 200;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.formError {\r\n    border: 2px solid #a94442; /* red */\r\n    color: red;\r\n}\r\n\r\n.formInput {\r\n    text-align: center;\r\n    font-size: x-large;\r\n    border-color: lightgray;\r\n}\r\n\r\n.userErrorWarning{\r\n    color: red;\r\n}\r\n\n", ""]);

// exports


/***/ })

},[487]);
//# sourceMappingURL=main.bundle.js.map