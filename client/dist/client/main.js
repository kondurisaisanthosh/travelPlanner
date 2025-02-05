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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" class=\"btn btn-danger float-right\">Logout</a>\n<br>\n\n<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <button class=\"nav-link active\"(click)=changeFlag(true,false,false)>Requests</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" (click)=changeFlag(false,false,true) >Holidays</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\"(click)=changeFlag(false,true,false) >Packages</button>\n    </li>\n  </ul>\n  <br>\n\n <section *ngIf=\"requestsFlag\">\n<div class=\"card bg-light mb-3\" *ngFor=\"let user of data\">\n    <div class=\"card-header bg-transparent text-primary text-uppercase\">{{user.name}}</div>\n    <div class=\"card-body\">\n        <p>Email:{{user.email}}</p>\n        <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=approve(user)>Approve</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=decline(user)>Decline</button>\n\n        </div>\n    </div>\n</div>\n </section>\n<br>\n\n<section *ngIf=\"availablePackageFlag\">\n<div *ngFor=\"let pack of packge\" class=\"card\">\n        <div class=\"card-header text-info\">\n          <h4><b>{{pack.packagename}}</b></h4>\n        </div>\n        <div class=\"card-body \">\n         \n            <p class=\"card-text\"><b>Destination:</b>{{pack.destination}}</p>\n            <p class=\"card-text\"><b>Flight Details:</b>{{pack.flight}}</p>\n            <p class=\"card-text\"><b>Hotel Details:</b>{{pack.hotel}}</p>\n            <p class=\"card-text\"><b>Date:</b>{{pack.date}}</p>\n            <p class=\"card-text\"><b>Days:</b>{{pack.days}}</p>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=delete(pack) >DELETE</button>\n        </div>\n</div>\n</section>\n\n\n<section *ngIf=\"holidaysFlag\">\n    <div *ngFor=\"let holiday of holidays\" class=\"card\">\n        <div class=\"card-header text-info\">\n          <h4><b>{{holiday.Holidayname}}</b></h4>\n        </div>\n        <div class=\"card-body \">\n            <p class=\"card-text\"><b>Start Date:</b>{{holiday.startdate}}</p>\n            <p class=\"card-text\"><b>End Date:</b>{{holiday.enddate}}</p>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=deleteHoliday(holiday) >DELETE</button>\n        </div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n<div class=\"container \">\n        <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Sign In</h5>\n            <form class=\"form-signin\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n              </div>\n              <br>\n              <div class=\"form-label-group\">\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n              <br>\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n              </div>\n              <!-- <a [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\" ><button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button></a> -->\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" color=\"primary\" routerLink=\"/auth/google\">Sign in</button>\n              <br>\n              \n              <br>\n              <a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" id=\"reg\">Not Registered?Register Here</a>\n              <br>\n              <a href=\"/\" id=\"reg_fp\">Forgot Password!</a>\n              <hr class=\"my-4\">\n              <a href=\"/auth/google\" id =\"gsignin\">Sign In with Google</a>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\n    <a class=\"navbar-brand\" href=\"/\"><b>Travel Planner</b></a>\n    <div class=\"navbar-collapse \">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\">Register</a>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='user && user.travelAgent===false'>\n  <br>\n  <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" class=\"btn btn-danger float-right\">Logout</a>\n  <h1 class=\"text-primary\">Hi {{user.name}},</h1>\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"sendRequest(user)\">Become a travel agent</button>\n  <br>\n  <br>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <button class=\"nav-link active\" (click)=changeFlag(true,false,false,false,false)>Flights</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link active\" (click)=changeFlag(false,true,false,false,false)>Hotels</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" (click)=changeFlag(false,false,true,false,false)>packages</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" (click)=changeFlag(false,false,false,true,false)>Holidays</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" (click)=changeFlag(false,false,false,false,true)>My Bookings</button>\n    </li>\n  </ul>\n  <br>\n  <section *ngIf=\"flightFlag\">\n    <input class=\"form-control col-sm-2 col-md-2 col-lg-2\" type=\"search\" name=\"sourcecitySearch\"\n      [(ngModel)]=\"sourcecitySearch\" (blur)=\"searchSourceSuggestion(sourcecitySearch)\" placeholder=\"Search Source City\"\n      aria-label=\"Search\"><br>\n    <select class=\"form-control col-sm-8 col-md-8 col-lg-8\" name=\"sourcecity\" id=\"sourcecity\" [(ngModel)]=\"sourcecity\"\n      placeholder=\"Select from the list\"><br>\n      <option *ngFor=\"let ctn of sourceCityArray\" [(value)]=\"ctn.PlaceId\">\n        {{ctn.PlaceName}}\n      </option>\n    </select>\n    <br>\n    <input class=\"form-control  col-sm-2 col-md-2 col-lg-2\" type=\"search\" name=\"destinationcitySearch\"\n      [(ngModel)]=\"destinationcitySearch\" (blur)=\"searchDestSuggestion(destinationcitySearch)\"\n      placeholder=\"Search Destination City\" aria-label=\"Search\"><br>\n\n    <select class=\"form-control  col-sm-8 col-md-8 col-lg-8\" name=\"city\" id=\"city\" [(ngModel)]=\"city\"\n      placeholder=\"Select from the list\">\n\n      <option *ngFor=\"let ctn of destCityArray\" [(value)]=\"ctn.PlaceId\">\n        {{ctn.PlaceName}}\n      </option>\n    </select>\n    <br>\n    <input class=\"form-control mr-sm-2\" type=\"date\" name=\"departureDate\" [(ngModel)]=\"departureDate\"\n      placeholder=\"Departure Date\" aria-label=\"date\"><br>\n    <input class=\"form-control mr-sm-2\" type=\"search\" name=\"numberdays\" [(ngModel)]=\"numberdays\"\n      placeholder=\"Number of days\" aria-label=\"Search\"><br>\n\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"\n      (click)=\"searchFlights(sourcecity,city,departureDate)\"> Lets go!</button>\n    <br>\n    <div *ngFor=\"let quote of quotes\" class=\"card\">\n      <div class=\"card-body\">\n          Id: {{quote.QuoteId}}<br>\n          price: {{quote.MinPrice}}<br>\n          <span *ngFor=\"let flightId of quote.OutboundLeg.CarrierIds\">\n            flight : {{carriersList[flightId]}}\n          </span>\n          <br>\n          DepartureTime:{{quote.OutboundLeg.DepartureDate}}    \n          <br>\n          <button type=\"button\" class=\"btn-primary\" (click)=\"selectFlight(quote.MinPrice,carriersList[quote.OutboundLeg.CarrierIds[0]],quote.OutboundLeg.DepartureDate)\">\n            Select this flight</button>\n      </div>\n    </div>\n  </section>\n\n  <section *ngIf=\"hotelFlag\">\n    <div *ngFor=\"let restaurant of restaurants\" class=\"card\">\n        <div class=\"card-body\">\n            <p class=\"card-text\"><b>Name:</b>{{restaurant.name}}</p>\n            <p class=\"card-text\"><b>Rating:</b>{{restaurant.rating}}</p>\n            <p class=\"card-text\"><b>Address:</b>{{restaurant.formatted_address}}</p>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"bookHotel(restaurant.name)\">select this hotel</button>\n        </div>\n    </div>\n    <br>\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"ownBooking()\"> Finish</button>\n  </section>\n\n  <section *ngIf=\"packageFlag\">\n    <div *ngFor=\"let pack of packge\" class=\"card\">\n      <div class=\"card-header text-danger\">\n        <h4><b>{{pack.packagename}}</b></h4>\n      </div>\n      <div class=\"card-body \">\n        <p class=\"card-text\">source:{{pack.source}}</p>\n        <p class=\"card-text\">Destination:{{pack.destination}}</p>\n        <p class=\"card-text\">Flight Details:{{pack.flight}}</p>\n        <p class=\"card-text\">price:{{pack.price}}</p>\n        <p class=\"card-text\">date:{{pack.date}}</p>\n        <p class=\"card-text\">Hotel Details:{{pack.hotel}}</p>\n        <p class=\"card-text\">Days:{{pack.days}}</p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"bookPackage(pack)\">Book this!</button>\n      </div>\n    </div>\n  </section>\n  <section *ngIf=\"myBookingsFlag\">\n    <p class=\"text-info\">Self Bookings</p>\n    <div *ngFor=\"let selfbooking of selfbookings\" class=\"card\">\n            <div *ngIf='selfbooking.email===user.email' class=\"card-body\">\n                <p class=\"card-text\"><b>Source:</b>{{selfbooking.source}}</p>\n                <p class=\"card-text\"><b>Destination:</b>{{selfbooking.destination}}</p>\n                <p class=\"card-text\"><b>Flight :</b>{{selfbooking.flight}}</p>\n                <p class=\"card-text\"><b>Price :</b>{{selfbooking.price}} $</p>\n                <p class=\"card-text\"><b>Departure date:</b>{{selfbooking.dep_date}}</p>\n                <p class=\"card-text\"><b>Hotel Details:</b>{{selfbooking.hotel}}</p>\n                <p class=\"card-text\"><b>Number of days:</b>{{selfbooking.days}} days</p>\n            </div>\n    </div>\n    <br>\n    <hr class=\"style1\">\n    <br>\n    <p class=text-info>Booking through package</p>\n    <div *ngFor=\"let booking of bookings\" class=\"card\">\n            <div *ngIf='user.email===booking.user_email' class=\"card-body\">\n                <p class=\"card-text\"><b>Package Name:</b>{{booking.packageInfo.packagename}} </p>\n                <p class=\"card-text\"><b>Source:</b>{{booking.packageInfo.source}}</p>\n                <p class=\"card-text\"><b>Destination:</b>{{booking.packageInfo.destination}}</p>\n                <p class=\"card-text\"><b>Flight :</b>{{booking.packageInfo.flight}}</p>\n                <p class=\"card-text\"><b>Price :</b>{{booking.packageInfo.price}} $</p>\n                <p class=\"card-text\"><b>Departure date:</b>{{booking.packageInfo.date}}</p>\n                <p class=\"card-text\"><b>Hotel Details:</b>{{booking.packageInfo.hotel}}</p>\n                <p class=\"card-text\"><b>Number of days:</b>{{booking.packageInfo.days}} days</p>\n              </div>\n      <br>\n    </div>\n\n  </section>\n\n</div>\n\n\n\n\n\n\n<div *ngIf='user && user.travelAgent===true'>\n  <br>\n  <a [routerLink]=\" ['/login']\" routerLinkActive=\"router-link-active\" class=\"btn btn-danger float-right\">Logout</a>\n  <h1 class=\"text-primary\">Hi {{user.name}},</h1>\n  <h3 class=\"text-success\">Travel agent</h3>\n  <br>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <button class=\"nav-link active\" (click)=changeFlag(true,false,false,false,false)>Flights</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link active\" (click)=changeFlag(false,true,false,false,false)>Hotels</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" (click)=changeFlag(false,false,true,false,false)>packages</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" (click)=changeFlag(false,false,false,true,false)>Holidays</button>\n    </li>\n    <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=changeFlag(false,false,false,false,true)>View Bookings</button>\n      </li>\n  </ul>\n  <br>\n  <section *ngIf=\"flightFlag\">\n      <input class=\"form-control \" type=\"search\" name=\"packname\"\n      [(ngModel)]=\"packname\" placeholder=\"Enter Package Name\"\n      aria-label=\"Search\"><br>\n\n      <input class=\"form-control col-sm-2 col-md-2 col-lg-2\" type=\"search\" name=\"sourcecitySearch\"\n        [(ngModel)]=\"sourcecitySearch\" (blur)=\"searchSourceSuggestion(sourcecitySearch)\" placeholder=\"Search Source City\"\n        aria-label=\"Search\"><br>\n      <select class=\"form-control col-sm-8 col-md-8 col-lg-8\" name=\"sourcecity\" id=\"sourcecity\" [(ngModel)]=\"sourcecity\"\n        placeholder=\"Select from the list\"><br>\n        <option *ngFor=\"let ctn of sourceCityArray\" [(value)]=\"ctn.PlaceId\">\n          {{ctn.PlaceName}}\n        </option>\n      </select>\n      <br>\n      <input class=\"form-control  col-sm-2 col-md-2 col-lg-2\" type=\"search\" name=\"destinationcitySearch\"\n        [(ngModel)]=\"destinationcitySearch\" (blur)=\"searchDestSuggestion(destinationcitySearch)\"\n        placeholder=\"Search Destination City\" aria-label=\"Search\"><br>\n  \n      <select class=\"form-control  col-sm-8 col-md-8 col-lg-8\" name=\"city\" id=\"city\" [(ngModel)]=\"city\"\n        placeholder=\"Select from the list\">\n  \n        <option *ngFor=\"let ctn of destCityArray\" [(value)]=\"ctn.PlaceId\">\n          {{ctn.PlaceName}}\n        </option>\n      </select>\n      <br>\n      <input class=\"form-control mr-sm-2\" type=\"date\" name=\"departureDate\" [(ngModel)]=\"departureDate\"\n        placeholder=\"Departure Date\" aria-label=\"date\"><br>\n      <input class=\"form-control mr-sm-2\" type=\"search\" name=\"numberdays\" [(ngModel)]=\"numberdays\"\n        placeholder=\"Number of days\" aria-label=\"Search\"><br>\n  \n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"\n        (click)=\"searchFlights(sourcecity,city,departureDate)\"> Lets go!</button>\n      <br>\n          <div *ngFor=\"let quote of quotes\" class=\"card\">\n                <div class=\"card-body\">\n                    Id: {{quote.QuoteId}}<br>\n                    price: {{quote.MinPrice}}<br>\n                    <span *ngFor=\"let flightId of quote.OutboundLeg.CarrierIds\">\n                      flight : {{carriersList[flightId]}}\n                    </span>\n                    <br>\n                    DepartureTime:{{quote.OutboundLeg.DepartureDate}}   \n                    <br>     \n                    <button type=\"button\" class=\"btn-primary\"\n                      (click)=\"selectFlight(quote.MinPrice,carriersList[quote.OutboundLeg.CarrierIds[0]],quote.OutboundLeg.DepartureDate)\">Select\n                      this flight</button>\n                </div>\n            </div>\n  </section>\n  \n\n  <section *ngIf=\"hotelFlag\">\n      <div *ngFor=\"let restaurant of restaurants\" class=\"card\">\n        <div class=\"card-body\">\n            <p class=\"card-text\"><b>Name:</b>{{restaurant.name}}</p>\n            <p class=\"card-text\"><b>Rating:</b>{{restaurant.rating}}</p>\n            <p class=\"card-text\"><b>Address:</b>{{restaurant.formatted_address}}</p>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"bookHotel(restaurant.name)\">select this hotel</button>\n        </div>\n      </div>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"createPackage()\"> Finish</button>\n    </section>\n\n  <section *ngIf=\"packageFlag\">\n    <p class=\"text-info\">My packages</p>\n    <div *ngFor=\"let pack of packge\" class=\"card\">\n      <div *ngIf='user.email===pack.email'>\n        <div class=\"card-header text-danger\">\n          <h4><b>{{pack.packagename}}</b></h4>\n        </div>\n        <div class=\"card-body \">\n          <p class=\"card-text\"><b>source:</b>{{pack.source}}</p>\n          <p class=\"card-text\"><b>Destination:</b>{{pack.destination}}</p>\n          <p class=\"card-text\"><b>Flight details:</b>{{pack.flight}}</p>\n          <p class=\"card-text\"><b>Date:</b>{{pack.date}}</p>\n          <p class=\"card-text\"><b> Price:</b>{{pack.price}}</p>\n          <p class=\"card-text\"><b>Hotel Details:</b>{{pack.hotel}}</p>\n          <p class=\"card-text\"><b>Date:</b>{{pack.date}}</p>\n          <p class=\"card-text\"><b>Days:</b>{{pack.days}}</p>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"viewBookings(pack)\">View Bookings!</button>\n        </div>\n        <br>\n      </div>\n    </div>\n    <br>\n    <hr class=\"style1\">\n    <br>\n    <div>\n      <p class=\"text-info\">Available Packages</p>\n    </div>\n    <div>\n      <div *ngFor=\"let pack of packge\" class=\"card\">\n        <div class=\"card-header text-danger\">\n          <h4><b>{{pack.packagename}}</b></h4>\n        </div>\n        <div class=\"card-body \">\n          <p class=\"card-text\"><b>Destination:</b>{{pack.destination}}</p>\n          <p class=\"card-text\"><b>Flight Details:</b>{{pack.flight}}</p>\n          <p class=\"card-text\"><b>Hotel Details:</b>{{pack.hotel}}</p>\n          <p class=\"card-text\"><b>Date:</b>{{pack.date}}</p>\n          <p class=\"card-text\"><b>Days:</b>{{pack.days}}</p>\n        </div>\n        <br>\n      </div>\n    </div>\n  </section>\n  <section *ngIf=\"myBookingsFlag\">\n    <p class=\"text-info\">View Bookings</p>\n    <div *ngFor=\"let bookingdata of viewBookingData\" class=card>\n      <div class=\"card-body\">\n        <p class=\"card-text\"><b>Name:</b>{{bookingdata.user_name}}</p><br>\n        <p class=\"card-text\"><b>Email:</b>{{bookingdata.user_email}}</p>\n      </div>\n    </div>\n\n  </section>\n  <section *ngIf=\"holidaysFlag\">\n      <input class=\"form-control \" type=\"text\" name=\"holidayname\"\n      [(ngModel)]=\"holidayname\" placeholder=\"Enter Holiday Name\"><br>\n      <input class=\"form-control mr-sm-2\" type=\"date\" name=\"HolidaystartDate\" [(ngModel)]=\"HolidaystartDate\"\n      placeholder=\"Holiday Start Date\" aria-label=\"date\"><br>\n      <input class=\"form-control mr-sm-2\" type=\"date\" name=\"HolidayendDate\" [(ngModel)]=\"HolidayendDate\"\n      placeholder=\"Holiday end Date\" aria-label=\"date\"><br>\n      <br>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"createHoliday()\">Create Holiday</button>\n  </section>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                <div class=\"card card-signin my-5\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title text-center\">Register Here</h5>\n                        <form class=\"form-signin\">\n                            <div class=\"form-label-group\">\n                                <input type=\"text\" id=\"r_firstname\" class=\"form-control\" placeholder=\"First Name\"\n                                    required autofocus>\n                            </div>\n                            <br>\n                            <div class=\"form-label-group\">\n                                    <input type=\"text\" id=\"r_lastname\" class=\"form-control\" placeholder=\"Last Name\"\n                                        required autofocus>\n                                </div>\n                            <br>\n                            <div class=\"form-label-group\">\n                                <input type=\"email\" id=\"r_inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n                                    required autofocus>\n                            </div>\n                            <br>\n                            <div class=\"form-label-group\">\n                                <input type=\"password\" id=\"r_inputPassword\" class=\"form-control\" placeholder=\"Password\"\n                                    required>\n                            </div>\n                            <br>\n                            <div class=\"form-label-group\">\n                                <input type=\"password\" id=\"r_confirmPassword\" class=\"form-control\"\n                                    placeholder=\"Confirm Password\" required>\n                            </div>\n                            <br>\n                            <div class=\"form-check-inline\">\n                                <label class=\"form-check-label\">\n                                    <input type=\"radio\" class=\"form-check-input\" name=\"gender\">Male\n                                </label>\n                            </div>\n                            <div class=\"form-check-inline\">\n                                <label class=\"form-check-label\">\n                                    <input type=\"radio\" class=\"form-check-input\" name=\"gender\"> Female\n                                </label>\n                            </div>\n                            <br>\n                            <br>\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\"\n                                type=\"submit\">Register</button>\n                            <br>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navPosition{\ntop:50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE1BQU07QUFDTiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2UG9zaXRpb257XG50b3A6NTA7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AdminComponent = class AdminComponent {
    constructor(service, httpClient) {
        this.service = service;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.requestsFlag = true;
        this.availablePackageFlag = false;
        this.httpClient.get('/api/data').subscribe((data) => {
            this.data = data;
        });
        this.httpClient.get('/api/travelagent/data').subscribe((data) => {
            console.log(data);
            this.packge = data;
        });
        this.httpClient.get('/api/holiday/data').subscribe((data) => {
            console.log(data);
            this.holidays = data;
        });
    }
    decline(user) {
        this.service.decline(user._id);
    }
    approve(user) {
        this.service.approve(user.email, user._id);
    }
    delete(pack) {
        this.service.delete(pack._id);
    }
    deleteHoliday(holiday) {
        this.service.deleteHoliday(holiday._id);
    }
    changeFlag(a, b, c) {
        this.requestsFlag = a;
        this.availablePackageFlag = b;
        this.holidaysFlag = c;
    }
};
AdminComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");







const routes = [
    { path: 'loginprofile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'adminprofile', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n  }\n  \n  li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n  \n  li a:hover {\n    background-color: #000000 ;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCA7XG4gIH0iXX0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");















const routes = [];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/entities/bookeduser.model.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/bookeduser.model.ts ***!
  \**********************************************/
/*! exports provided: BookedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedUser", function() { return BookedUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BookedUser {
    constructor(packageInfo, packageid, name, email) {
        this.packageInfo = packageInfo;
        this.packageid = packageid;
        this.name = name;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/entities/holiday.model.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/holiday.model.ts ***!
  \*******************************************/
/*! exports provided: Holiday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holiday", function() { return Holiday; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Holiday {
    constructor(holidayName, startDate, endDate) {
        this.holidayName = holidayName;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


/***/ }),

/***/ "./src/app/entities/ownbooking.model.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/ownbooking.model.ts ***!
  \**********************************************/
/*! exports provided: OwnBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnBooking", function() { return OwnBooking; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OwnBooking {
    constructor(source, destination, flight, price, hotel, date, days, email) {
        this.source = source;
        this.destination = destination;
        this.flight = flight;
        this.price = price;
        this.hotel = hotel;
        this.date = date;
        this.days = days;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/entities/package.model.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/package.model.ts ***!
  \*******************************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Package {
    constructor(packageName, source, destination, flight, hotel, date, days, price, email) {
        this.packageName = packageName;
        this.source = source;
        this.destination = destination;
        this.flight = flight;
        this.hotel = hotel;
        this.date = date;
        this.days = days;
        this.price = price;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .btn-google {\n    color: white;\n    background-color: #ea4335;\n  }\n  #reg{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  #reg_fp{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  #gsignin{\n    display: block;\n    width: auto;\n    height: auto;\n    background: red;\n    padding: 10px;\n    text-align: center;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYnRuLWdvb2dsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzU7XG4gIH1cbiAgI3JlZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAjcmVnX2Zwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICNnc2lnbmlue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/package.service.ts":
/*!************************************!*\
  !*** ./src/app/package.service.ts ***!
  \************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PackageService = class PackageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    createPackage(dpackage) {
        console.log(dpackage);
        this.httpClient.post('/api/travelagent/create', {
            dpackage
        }).subscribe(response => {
            console.log(response);
            this.newPost = response;
        });
    }
    selfBooking(ownbooking) {
        console.log(ownbooking);
        this.httpClient.post('/api/user/selfbooking', {
            ownbooking
        }).subscribe(response => {
            console.log(response);
            this.newPost = response;
        });
    }
};
PackageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PackageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PackageService);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_hotel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/hotel.service */ "./src/app/services/hotel.service.ts");
/* harmony import */ var _package_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package.service */ "./src/app/package.service.ts");
/* harmony import */ var _entities_package_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/package.model */ "./src/app/entities/package.model.ts");
/* harmony import */ var _entities_bookeduser_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entities/bookeduser.model */ "./src/app/entities/bookeduser.model.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var _entities_ownbooking_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../entities/ownbooking.model */ "./src/app/entities/ownbooking.model.ts");
/* harmony import */ var _entities_holiday_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entities/holiday.model */ "./src/app/entities/holiday.model.ts");











let ProfileComponent = class ProfileComponent {
    constructor(service, httpClient, hservice, pservice, booking) {
        this.service = service;
        this.httpClient = httpClient;
        this.hservice = hservice;
        this.pservice = pservice;
        this.booking = booking;
    }
    ngOnInit() {
        this.httpClient.get('/api/me').subscribe((data) => {
            this.user = data;
        });
        this.httpClient.get('/api/travelagent/data').subscribe((data) => {
            console.log(data);
            this.packge = data;
        });
        this.httpClient.get('/api/travelagent/bookings').subscribe((data) => {
            console.log(data);
            this.bookings = data;
        });
        this.httpClient.get('/api/user/selfbookings').subscribe((data) => {
            console.log('self bookings');
            console.log(data);
            this.selfbookings = data;
        });
    }
    sendRequest(user) {
        this.service.sendRequest(user);
    }
    searchRestaurants() {
        console.log('in search restaurants');
        console.log(this.destinationcitySearch);
        this.hservice.search(this.destinationcitySearch).subscribe(data => {
            this.restaurants = data;
            console.log(JSON.stringify(this.restaurants));
        });
    }
    searchFlights(source, destination, date) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': "application/json",
                'Content-Type': "text/plain;charset=UTF-8",
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                'x-rapidapi-key': '0f889d8acamsh70066d6d7cff126p11b6dejsn43a562fc581c',
                'Authorization': 'Basic ' + btoa('username:password')
            }), withCredentials: true
        };
        this.httpClient.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/' + source + '/' + destination + '/' + date, httpOptions).subscribe((data) => {
            console.log(data);
            this.carriersList = {};
            this.carriers = data.Carriers;
            this.carriers.forEach(element => {
                this.carriersList[element.CarrierId] = element.Name;
            });
            this.quotes = data.Quotes;
        });
        this.searchRestaurants();
        // this.service.searchFlights().subscribe(data=>{
        //   // console.log(JSON.stringify(data));
        //   this.flightData=data;
        //   console.log('flight')
        //   console.log(this.flightData.Quotes);
        //   this.quotes=this.flightData.Quotes;
        //   console.log(this.quotes[0].OutboundLeg.OriginId);
        //   console.log(this.quotes[0].MinPrice);
        //   console.log(this.quotes[0].OutboundLeg.DestinationId);
        // });
    }
    searchSourceSuggestion(sourcecitySearch) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': "application/json",
                'Content-Type': "text/plain;charset=UTF-8",
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                'x-rapidapi-key': '0f889d8acamsh70066d6d7cff126p11b6dejsn43a562fc581c',
                'Authorization': 'Basic ' + btoa('username:password')
            }), withCredentials: true
        };
        this.httpClient.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=' + sourcecitySearch, httpOptions).subscribe((data) => {
            console.log(data);
            this.sourceCityArray = data.Places;
        });
    }
    searchDestSuggestion(destinationcitySearch) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': "application/json",
                'Content-Type': "text/plain;charset=UTF-8",
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                'x-rapidapi-key': '0f889d8acamsh70066d6d7cff126p11b6dejsn43a562fc581c',
                'Authorization': 'Basic ' + btoa('username:password')
            }), withCredentials: true
        };
        this.httpClient.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=' + destinationcitySearch, httpOptions).subscribe((data) => {
            console.log(data);
            this.destCityArray = data.Places;
        });
    }
    bookHotel(hotel) {
        console.log(hotel);
        this.hotelname = hotel;
    }
    createHoliday() {
        const hpackage = new _entities_holiday_model__WEBPACK_IMPORTED_MODULE_10__["Holiday"](this.holidayname, this.HolidaystartDate, this.HolidayendDate);
        this.service.holiday(hpackage);
    }
    source(source) {
        throw new Error("Method not implemented.");
    }
    createPackage() {
        const dpackage = new _entities_package_model__WEBPACK_IMPORTED_MODULE_6__["Package"](this.packname, this.sourcecitySearch, this.destinationcitySearch, this.selectedFligt, this.hotelname, this.selectedFlightDepartue, this.numberdays, this.selectedFlightPrice, this.user.email);
        this.pservice.createPackage(dpackage);
    }
    ownBooking() {
        const ownbooking = new _entities_ownbooking_model__WEBPACK_IMPORTED_MODULE_9__["OwnBooking"](this.sourcecitySearch, this.destinationcitySearch, this.selectedFligt, this.selectedFlightPrice, this.hotelname, this.selectedFlightDepartue, this.numberdays, this.user.email);
        this.pservice.selfBooking(ownbooking);
    }
    myPackage(user) {
        this.service.myPackages(user);
    }
    viewBookings(pack) {
        console.log('view bookings');
        this.booking.getBookedUsers(pack).subscribe(response => {
            console.log(response);
            this.viewBookingData = response;
        });
        ;
    }
    bookPackage(pack) {
        const bookeduser = new _entities_bookeduser_model__WEBPACK_IMPORTED_MODULE_7__["BookedUser"](pack, pack._id, this.user.name, this.user.email);
        this.booking.storeBookedUsers(bookeduser);
    }
    changeFlag(a, b, c, d, e) {
        this.flightFlag = a;
        this.hotelFlag = b;
        this.packageFlag = c;
        this.holidaysFlag = d;
        this.myBookingsFlag = e;
    }
    selectFlight(price, airplanename, time) {
        this.selectedFligt = airplanename;
        this.selectedFlightPrice = price;
        this.selectedFlightDepartue = time;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_hotel_service__WEBPACK_IMPORTED_MODULE_4__["HotelService"] },
    { type: _package_service__WEBPACK_IMPORTED_MODULE_5__["PackageService"] },
    { type: _services_booking_service__WEBPACK_IMPORTED_MODULE_8__["BookingService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    sendRequest(requser) {
        console.log('santosh');
        console.log(requser);
        this.httpClient.post('/requestdata', {
            params: {
                searchKey: this.requser
            }
        }).subscribe(response => {
            console.log(response);
            this.newPost = response;
        });
    }
    decline(decuser) {
        console.log(decuser);
        this.httpClient.post('api/admin/decline', {
            params: {
                searchKey: decuser
            }
        }).subscribe(response => {
            console.log(response);
            //this.newPost = response
        });
    }
    approve(email, id) {
        console.log(email);
        this.httpClient.post('api/admin/approval', {
            params: {
                searchKey: email,
                searchid: id
            }
        }).subscribe(response => {
            console.log(response);
            //this.newPost = response
        });
    }
    holiday(hpackage) {
        console.log(hpackage);
        this.httpClient.post('/api/travelagent/createholiday', {
            params: {
                searchKey: hpackage,
            }
        }).subscribe(response => {
            console.log(response);
        });
    }
    delete(id) {
        this.httpClient.post('api/admin/package/delete', {
            params: {
                searchKey: id,
            }
        }).subscribe(response => {
            console.log(response);
            this.newPost = response;
        });
    }
    deleteHoliday(id) {
        this.httpClient.post('api/admin/holiday/delete', {
            params: {
                searchKey: id,
            }
        }).subscribe(response => {
            console.log(response);
        });
    }
    searchFlights() {
        return this.httpClient.get('api/travelagent/flights'
        // {
        // params: {
        //   searchKey: user.email,
        // }
        // }
        );
    }
    myPackages(user) {
        this.httpClient.post('api/travelagent/package/mypackages', {
            params: {
                searchKey: user.email,
            }
        }).subscribe(response => {
            console.log(response);
            this.newPost = response;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BookingService = class BookingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getBookedUsers(pack) {
        console.log('in service get booked user');
        console.log(pack);
        return this.httpClient.post('api/travelagent/viewbookings', {
            params: {
                searchKey: pack,
            }
        });
    }
    storeBookedUsers(user) {
        console.log('in service store booked user');
        console.log(user);
        this.httpClient.post('/api/travelagent/book/users', {
            params: {
                searchKey: user,
            }
        }).subscribe(response => {
            console.log(response);
            this.newPost = response;
        });
    }
};
BookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookingService);



/***/ }),

/***/ "./src/app/services/hotel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/hotel.service.ts ***!
  \*******************************************/
/*! exports provided: HotelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function() { return HotelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HotelService = class HotelService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    search(cityname) {
        return this.httpClient.post('/hotels/data', {
            params: {
                searchKey: cityname
            }
        });
    }
};
HotelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HotelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HotelService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/santoshkonduri/Downloads/travel_planner/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map