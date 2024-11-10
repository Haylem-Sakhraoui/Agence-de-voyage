import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './back/home/home.component';
import { LoginComponent } from './login/login.component';
import { AddtransportComponent } from './back/transport/addtransport/addtransport.component';
import { EdittransportComponent } from './back/transport/edittransport/edittransport.component';
import { ListtransportComponent } from './back/transport/listtransport/listtransport.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ListmaisonhoteComponent } from './back/maisonhote/listmaisonhote/listmaisonhote.component';
import { AddmaisonhoteComponent } from './back/maisonhote/addmaisonhote/addmaisonhote.component';
import { EditmaisonhoteComponent } from './back/maisonhote/editmaisonhote/editmaisonhote.component';
import { MaisonhoteComponent } from './front/maisonhote/maisonhote/maisonhote.component';
import { DetailmaisonhoteComponent } from './front/maisonhote/detailmaisonhote/detailmaisonhote.component';
import { RegisterComponent } from './login/register/register.component';
import { AlloffreComponent } from './back/offre/alloffre/alloffre.component';
import { AddoffreComponent } from './back/offre/addoffre/addoffre.component';
import { EditoffreComponent } from './back/offre/editoffre/editoffre.component';
import { DetailoffreComponent } from './front/offre/detailoffre/detailoffre.component';
import { TransportComponent } from './front/transport/transport/transport.component';
import { TransportdetailComponent } from './front/transport/transportdetail/transportdetail.component';

import { ListBookingComponent } from './back/booking/list-booking/list-booking.component';
import { EditBookingComponent } from './back/booking/edit-booking/edit-booking.component';
import { AddHotelComponent } from './back/Hotel/add-hotel/add-hotel.component';
import { ListHotelComponent } from './back/Hotel/list-hotel/list-hotel.component';
import { EditHotelComponent } from './back/Hotel/edit-hotel/edit-hotel.component';
import { HotelComponent } from './front/hotel/hotel/hotel.component';
import { DetailHotelComponent } from './front/hotel/detail-hotel/detail-hotel.component';
import { FormBookingComponent } from './front/form-booking/form-booking.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  //maison hote
  { path: 'maisonhote', component: MaisonhoteComponent },
  { path: 'detailmaisonhote/:id', component: DetailmaisonhoteComponent },
  {
    path: 'listmaisonhhote',
    component: ListmaisonhoteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addmaisonhote',
    component: AddmaisonhoteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editmaisonhote/:id',
    component: EditmaisonhoteComponent,
    canActivate: [AuthGuard],
  },

  // transport
  {
    path: 'listtransport',
    component: ListtransportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addtransport',
    component: AddtransportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edittransport/:id',
    component: EdittransportComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'detailtransport/:id', component: TransportdetailComponent },

  //booking
  {
    path: 'listbooking',
    component: ListBookingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editbooking/:id',
    component: EditBookingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'booking', component: FormBookingComponent },

  //offre
  { path: 'alloffre', component: AlloffreComponent, canActivate: [AuthGuard] },
  { path: 'addoffre', component: AddoffreComponent, canActivate: [AuthGuard] },
  {
    path: 'editoffre/:idOffre',
    component: EditoffreComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'detailoffre/:idOffre', component: DetailoffreComponent },
  //hotel Back
  { path: 'addhotel', component: AddHotelComponent, canActivate: [AuthGuard] },
  {
    path: 'listhotel',
    component: ListHotelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edithotel/:id',
    component: EditHotelComponent,
    canActivate: [AuthGuard],
  },

  //hotel front
  { path: 'hotel', component: HotelComponent },
  { path: 'detailhotel/:id', component: DetailHotelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
