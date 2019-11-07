import { Component, OnInit, ɵConsole } from '@angular/core';
import { TipoDoctorService } from '../../Services/tipo-doctor/tipo-doctor.service';
import TipoDoctor from 'src/app/Models/tipo-doctor/tipo-doctor.model';


declare var $: any;
@Component({
  selector: 'app-tipo-doctor',
  templateUrl: './tipo-doctor.component.html',
  styleUrls: ['./tipo-doctor.component.css']
})
export class TipoDoctorComponent implements OnInit {
  public arrayTipoDoctor: Array<TipoDoctor> = new Array<TipoDoctor>();
  po: Map<any, any>;
  constructor(public tipoDoctorService: TipoDoctorService) { }

  ngOnInit() {
    this.buscarTodos();

  }
  private buscarId() {
    this.arrayTipoDoctor = new Array<TipoDoctor>();
    console.log($("#idlabel").val());
    if ($("#idlabel").val() == "") {
      this.buscarTodos();
    } else {

      this.tipoDoctorService.buscarPorId($("#idlabel").val()).toPromise().then((data: TipoDoctor) => {
        console.log(data);

        this.arrayTipoDoctor[this.arrayTipoDoctor.length] = JSON.parse(JSON.stringify(data));

      });
    }
  }
  private eliminar(id: number) {
    this.tipoDoctorService.eliminarDoctor(id).toPromise().then((value) => {
      alert("tipo de doctor eliminado");
      this.buscarTodos();
    }).catch(() => {
      alert("hubo un error al eliminar el tipo de doctor");
    });
  }
  private buscarTodos() {
    this.arrayTipoDoctor = new Array<TipoDoctor>();
    this.tipoDoctorService.buscarTodosTipoDoctor().toPromise().then((data: Array<TipoDoctor>) => {
      console.log(data);
      data.forEach(element => {

        console.log(JSON.stringify(element));
        this.arrayTipoDoctor[this.arrayTipoDoctor.length] = JSON.parse(JSON.stringify(element));
      });
    });
  }
}
