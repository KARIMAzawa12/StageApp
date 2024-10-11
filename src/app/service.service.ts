import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}
  isfirstTime : boolean = true

    CréerOffreStage(obj:any){
      return this.http.post('http://localhost:8080/apiStages', obj)
    }
    GetAllStages(){
      return this.http.get('http://localhost:8080/apiStages')
    }
    deleteStage(id : any){
      return this.http.delete('http://localhost:8080/apiStages/' + id)
    }
    GetStageById(id : any){
      return this.http.get('http://localhost:8080/apiStages/' + id)
    }
    UpdateStage(id:any, stage : any){
      return this.http.put('http://localhost:8080/apiStages/' + id, stage)
    }
    

    CréerOffreEmploi(obj:any){
      return this.http.post('http://localhost:8080/Emplois', obj)
    }
    
    GetAllEmplois(){
      return this.http.get('http://localhost:8080/Emplois')
    }
    deleteEmploi(id : any){
      return this.http.delete('http://localhost:8080/Emplois/' + id)
    }
    GetEmploiById(id : any){
      return this.http.get('http://localhost:8080/Emplois/' + id)
    }
    UpdateEmploi(id:any, emploi : any){
      return this.http.put('http://localhost:8080/Emplois/' + id, emploi)
    }
    AjouterProfils(obj:any){
      return this.http.post('http://localhost:8080/profils', obj)
    }
    GetProfilById(id : any){
      return this.http.get('http://localhost:8080/profils/' + id)
    }
}
