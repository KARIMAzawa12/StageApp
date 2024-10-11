import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit{
  id : any
  stageOffre : any
  constructor(private act: ActivatedRoute, private sharedService : ServiceService){}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id')
    this.sharedService.GetStageById(this.id).subscribe(
      res => {
        this.stageOffre = res
      }, 
      err =>{
        console.log(err)
      }
    )
  }
  
Update(){
  this.sharedService.UpdateStage(this.id, this.stageOffre).subscribe(
    res => {
      this.stageOffre = res
      console.log(res)
    }, 
    err =>{
      console.log(err)
    }
  )
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

  if (tab1 && tab2) {
    if (tab1.style.display === 'block') {
      tab1.style.display = 'none';
      tab2.style.display = 'block';
    } else {
      tab1.style.display = 'block';
      tab2.style.display = 'none';
    }
  }
}
}
