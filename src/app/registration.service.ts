import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }
  nEmployee(obj:any){
    return this.http.post('http://localhost:8080/employee/signup', obj)
  }
  GetEmployee(){
    return this.http.get('http://localhost:8080/employee')
  }
  deleteEmployee(id : any){
    return this.http.delete('http://localhost:8080/employee/' + id)
  }
  GetEmployeeById(id : any){
    return this.http.get('http://localhost:8080/employee/' + id)
  }
  UpdateEmployee(id:any, s : any){
    return this.http.put('http://localhost:8080/employee/' + id, s)
  }
  nStagiaire(obj:any){
    return this.http.post('http://localhost:8080/stagiaires/signup', obj)
  }
  GetStagiaire(){
    return this.http.get('http://localhost:8080/stagiaires')
  }
  deleteStagiaire(id : any){
    return this.http.delete('http://localhost:8080/stagiaires/' + id)
  }
  GetStagiaireById(id : any){
    return this.http.get('http://localhost:8080/stagiaires/' + id)
  }
  UpdateStagiaire(id:any, s : any){
    return this.http.put('http://localhost:8080/stagiaires/' + id, s)
  }

}
