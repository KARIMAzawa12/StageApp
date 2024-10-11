import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  stagiaire : any = {
    "id" : 0,
    "nom": "",
    "prenom": "",
    "email": "",
    "telephone": "",
    "mot_pass": "",
    "Confmot_pass": ""
  }
  employee : any = {
    "id" : 0,
    "nom_entreprise": "",
    "nom_prenom": "",
    "email": "",
    "telephone": "",
    "ville": "",
    "adress": "",
    "mot_pass": "",
    "Confmot_pass": ""
  }
  constructor(private emploService: RegistrationService) { }

  showTab(tabName: string, event : Event): void {
    event.preventDefault();
    const employeurTab = (<HTMLInputElement>document.getElementById('employeurTab'));
    const stagiaireTab = document.getElementById('stagiaireTab');

    if (tabName === 'employeur') {
      if (employeurTab) {
        employeurTab.style.display = 'block';
      }
      if (stagiaireTab) {
        stagiaireTab.style.display = 'none';
      }
    }
    if(tabName === 'stagiaire'){
      if (employeurTab) {
        employeurTab.style.display = 'none';
      }
      if (stagiaireTab) {
        stagiaireTab.style.display = 'block';
      }
    }
  }
  signup(){
    this.emploService.nEmployee(this.stagiaire).subscribe((res: any) => {
      
   
      console.log(res)
      this.employee = {
        "id" : 0,
        "nom_entreprise": "",
        "nom_prenom": "",
        "email": "",
        "telephone": "",
        "ville": "",
        "adress": "",
        "mot_pass": "",
        "Confmot_pass": ""
      } }
    ,err =>{
      console.log(err)
      alert("error");
    }
    );

  }
  signupStagiaire(){
    this.emploService.nStagiaire(this.employee).subscribe((res: any) => {
      
   
      console.log(res)
      this.stagiaire= {
        "id" : 0,
        "nom": "",
        "prenom": "",
        "email": "",
        "telephone": "",
        "mot_pass": "",
        "Confmot_pass": ""
      } }
    ,err =>{
      console.log(this.stagiaire)
      alert("error");
    }
    );

  }
    

  
}
