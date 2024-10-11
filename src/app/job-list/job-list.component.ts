import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  constructor(private act: ActivatedRoute, private service: ServiceService) {}
  stages : any
  emplois : any
  someId : any
  ngOnInit(): void {
    this.someId = this.act.snapshot.paramMap.get('category')
    console.log(this.someId);
    this.service.GetAllStages().subscribe(
      res => {
        this.stages = res
        console.log('Réponse du serveur :', res);
      },
      err => {
        console.error('Erreur lors de la requête :', err);
      }
    );
    this.service.GetAllEmplois().subscribe(
      res => {
        this.emplois = res
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
