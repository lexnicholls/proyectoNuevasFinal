import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { TipoDoctorComponent } from './Components/tipo-doctor/tipo-doctor.component';
import { TipoConsultorioComponent } from './Components/tipo-consultorio/tipo-consultorio.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { DoctoresComponent } from './Components/doctores/doctores.component';
import { ConsultorioComponent } from './Components/consultorio/consultorio.component';
import { CitaComponent } from './Components/cita/cita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TipoDoctorComponent,
    TipoConsultorioComponent,
    PacienteComponent,
    DoctoresComponent,
    ConsultorioComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
