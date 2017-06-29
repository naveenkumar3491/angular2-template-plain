"use strict";
var home_component_1 = require('./home/home.component');
var qrcodes_component_1 = require("./qrcodes/qrcodes.component");
var offers_component_1 = require("./offers/offers.component");
var electricians_component_1 = require("./electricians/electricians.component");
exports.MODULE_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'manage-electricians', component: electricians_component_1.ElectriciansComponent },
    { path: 'manage-offers', component: offers_component_1.OffersComponent },
    { path: 'manage-qr-codes', component: qrcodes_component_1.QrCodesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    electricians_component_1.ElectriciansComponent,
    offers_component_1.OffersComponent,
    qrcodes_component_1.QrCodesComponent
];
//# sourceMappingURL=dashboard.routes.js.map