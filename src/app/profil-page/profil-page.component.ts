import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent {
  ProfileD : any
  id : any
  constructor(private act: ActivatedRoute, private sharedService : ServiceService){}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id')
    this.sharedService.GetProfilById(this.id).subscribe(
      res => {
        console.log(this.id)
        this.ProfileD = res
        console.log("Emploi details" + this.ProfileD)
      }, 
      err =>{
        console.log(err)
      }
    )
  }
}
