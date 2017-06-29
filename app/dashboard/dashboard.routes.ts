import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { QrCodesComponent } from "./qrcodes/qrcodes.component";
import { OffersComponent } from "./offers/offers.component";
import { ElectriciansComponent } from "./electricians/electricians.component";

export const MODULE_ROUTES: Route[] =[
    { path: 'home', component: HomeComponent },
    { path: 'manage-electricians', component: ElectriciansComponent },
    { path: 'manage-offers', component: OffersComponent },
    { path: 'manage-qr-codes', component: QrCodesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    ElectriciansComponent,
    OffersComponent,
    QrCodesComponent
]
