import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthguardService } from './doctorauthguard.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService, RoleGuardService } from './auth-guard.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'admin', component: AdmindashComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin'] } },
  { path: 'appointmentlist', component: AppointmentComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'create-appointment', component: CreateAppointmentComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'docdash', component: DocdashComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Doctor'] } },
  { path: 'create-patient', component: CreatePatientComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'view-medicine', component: MedicinelistComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'create-medicine', component: CreateMedicineComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'update-patient/:id', component: UpdatePatientComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'view-patient/:id', component: ViewPatientComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'update-medicine/:id', component: UpdateMedicineComponent, canActivate: [AuthGuardService, RoleGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'doclogin', component: DocloginComponent },
  { path: 'adlogin', component: AdloginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
