import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  EmploiDetails : any
  id : any
  constructor(private act: ActivatedRoute, private sharedService : ServiceService){}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id')
    this.sharedService.GetEmploiById(this.id).subscribe(
      res => {
        console.log(this.id)
        this.EmploiDetails = res
        console.log("Emploi details" + this.EmploiDetails)
      }, 
      err =>{
        console.log(err)
      }
    )
  }
}
