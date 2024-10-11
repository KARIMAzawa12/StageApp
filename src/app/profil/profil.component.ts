import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  activeTab: string = 'account-general';
  id : any
  profilsList: any
  myId : any
  constructor(private act: ActivatedRoute, private sharedService : ServiceService){}

  profils : any = {
    "id" : "",
    "username": "",
    "pole": "",
    "password": "",
    "bio": "",
    "birthday": "",
    "website": "",
    "twitter": "",
    "facebook": "",
    "googlePlus": "",
    "linkedIn": "",
    "instagram": "",
    "titre" : "",
    "posteActuel" : ""
  }
  ngOnInit(): void {
    console.log(this.myId)
    this.sharedService.GetProfilById(this.profils.myId).subscribe(
      
      (data: any) => {
        this.profils = data;
      },
      error => {
        console.error('Erreur lors de la récupération des données du profil :', error);
      }
    );
  }
  onLinkClick(tabId : string, event : Event): void {
    event.preventDefault();
    this.activeTab = tabId;
    console.log(this.activeTab === 'account-change-password');
  }
  AddProfil() {
    this.sharedService.isfirstTime = false
    this.sharedService.AjouterProfils(this.profils).subscribe((res: any) => {
      this.myId = res.id
      this.profils = res
      alert("success")
    }
    ,err =>{
      alert("error");
      console.log(err)
    }
    );
    
  }
}
