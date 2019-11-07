import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipoDoctorService {

  constructor(private http: HttpClient) { }

  public buscarTodosTipoDoctor(){
    return this.http.get("http://localhost:3000/tipo_doctor");
  }
  public buscarPorId(id:number){
    return this.http.get("http://localhost:3000/tipo_doctor"+id);
  }
  public eliminarDoctor(id:number){
    return this.http.delete("http://localhost:3000/tipo_doctor"+id);
  }
}
