import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
  stageOffre : any = {
    "id_stage": 0,
		"dateDebut": new Date(),
		"dateFin": new Date(),
		"lieuStage": "",
		"dureeStage": "",
		"nomSociete": "",
		"description": "",
		"dateCreation": new Date(),
		"dateModification": new Date(),
    "image" : "", 
     "adresse": "",
    "typeStage": "",
    "secteur": "",
    "responsabilites": "",
    "qualifications": "",
    "supplementaires": "",
  }
  emploiOffre : any = {
    "id" : 0,
    "nomEntreprise": "",
    "fullName": "",
    "teleEntreprise": "",
    "emailEntreprise": "",
    "villeEntreprise": "",
    "adresseEntreprise": "",
    "nbrEmployes": "",
    "poste": "",
    "nbrPoste": "",
    "typePoste": "",
    "horaire": "",
    "salaire": "",
    "primes": "",
    "autorisation": "",
    "langues": "",
    "delais": "",
    "datePrevu": new Date(),
    "typeContrat": "",
    "descriptionPoste": "",
    "secteur": ""
  }
  selectedSecteur: string = '';
  constructor(private stageService: ServiceService) { }

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
  

  Offre() {
  this.stageOffre.secteur = this.selectedSecteur
    this.stageService.CréerOffreStage(this.stageOffre).subscribe((res: any) => {
    
      this.stageOffre = {
        "id_stage": 0,
        "dateDebut": new Date(),
        "dateFin": new Date(),
        "lieuStage": "",
        "dureeStage": "",
        "nomSociete": "",
        "description": "",
        "dateCreation": new Date(),
        "dateModification": new Date(), 
        "image" : "",
        "adresse": "",
        "typeStage": "",
        "secteur": "",
        "responsabilites": "",
        "qualifications": "",
        "supplementaires": "",
      }
    }
    ,err =>{
      alert("error");
    }
    );

  }
  OffreEmploi(){
    this.emploiOffre.secteur = this.selectedSecteur
    this.stageService.CréerOffreEmploi(this.emploiOffre).subscribe((res: any) => {
      this.emploiOffre = {
        "nomEntreprise": "",
        "fullName": "",
        "teleEntreprise": "",
        "emailEntreprise": "",
        "villeEntreprise": "",
        "adresseEntreprise": "",
        "nbrEmployes": "",
        "poste": "",
        "nbrPoste": "",
        "typePoste": "",
        "horaire": "",
        "salaire": "",
        "primes": "",
        "autorisation": "",
        "langues": "",
        "delais": "",
        "datePrevu": new Date(),
        "typeContrat": "",
        "descriptionPoste": "",
        "secteur": ""
      }
    }
    ,err =>{
      alert("error");
    }
    );
  }
 


  onSelect(event: any): void {
      this.selectedSecteur = event.target.options[event.target.selectedIndex].text;
      
  }

  onFileSelected(event: any): void {
    const file: File | null = event.target.files && event.target.files.length > 0
      ? event.target.files.item(0)
      : null;

    if (file) {
      this.convertFileToBase64(file);
    }
  }

  convertFileToBase64(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Set the base64 data to the image property
      this.stageOffre.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }



  changeTab(event: Event): void {
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const infoEntreprise = document.getElementById('infoEntreprise');
    const details = document.getElementById('details');
    const parametres = document.getElementById('parametres');
  
    if (tab1 && tab2) {
      if (tab1.style.display === 'block') {
        tab1.style.display = 'none';
        tab2.style.display = 'block';
      } else {
        tab1.style.display = 'block';
        tab2.style.display = 'none';
      }
    }
    if (infoEntreprise && details && parametres) {
      console.log(infoEntreprise.style.display === 'block')
      if (infoEntreprise.style.display === 'block') {
        infoEntreprise.style.display = 'none';
        details.style.display = 'block';
      }else if(details.style.display === 'block'){
        details.style.display = 'none';
        infoEntreprise.style.display = 'none';
        parametres.style.display = 'block';
      }
      
    }
  
  }
  
}
