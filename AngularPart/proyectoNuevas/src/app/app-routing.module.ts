import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

import { TipoDoctorComponent } from './Components/tipo-doctor/tipo-doctor.component';
import { TipoConsultorioComponent } from './Components/tipo-consultorio/tipo-consultorio.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { DoctoresComponent } from './Components/doctores/doctores.component';
import { ConsultorioComponent } from './Components/consultorio/consultorio.component';
import { CitaComponent } from './Components/cita/cita.component';

const routes: Routes = [{path:"", component:LoginComponent},{path:"TipoDoctor",component:TipoDoctorComponent},{path:"TipoConsultorio",component:TipoConsultorioComponent},
{path:"Paciente",component:PacienteComponent},{path:"Doctores",component:DoctoresComponent},{path:"Consultorio",component:ConsultorioComponent},
{path:"Cita",component:CitaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
