import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stage-list-by-category',
  templateUrl: './stage-list-by-category.component.html',
  styleUrls: ['./stage-list-by-category.component.css']
})
export class StageListByCategoryComponent implements OnInit {
  constructor(private act: ActivatedRoute, private service: ServiceService) {}
  emplois : any
  stages : any
  someId : any
  ngOnInit(): void {
    this.someId = this.act.snapshot.paramMap.get('category')
    console.log("someId :"+ this.someId)
    
    this.service.GetAllEmplois().subscribe(
      
      res => {
        this.emplois = res
        this.emplois = this.emplois.filter((objet: { secteur: any; }) => objet.secteur == this.someId);
        console.log('Réponse du serveur :', res);
      },
      err => {
        console.error('Erreur lors de la requête :', err);
      }
    );
    this.service.GetAllStages().subscribe(
      res => {
        this.stages = res
        this.stages = this.stages.filter((objet: { secteur: any; }) => objet.secteur == this.someId);
        console.log('Réponse du serveur :', res);
      },
      err => {
        console.error('Erreur lors de la requête :', err);
      }
    );
  }
  delete(id : any){
    this.service.deleteStage(id).subscribe(
      res => {
        this.stages = res
        console.log('Réponse du serveur :', res);
      },
      err => {
        console.error('Erreur lors de la requête :', err);
      }
    );
  }
  deleteEmploi(id : any){
    console.log("e1")
    this.service.deleteEmploi(id).subscribe(
      res => {
        this.emplois = res
        console.log('Réponse du serveur :', res);
      },
      err => {
        console.error('Erreur lors de la requête :', err);
      }
    );
  }
  
}


