import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-update-emploi',
  templateUrl: './update-emploi.component.html',
  styleUrls: ['./update-emploi.component.css']
})
export class UpdateEmploiComponent {
  id : any
  OffrEmploi: any
  constructor(private act: ActivatedRoute, private sharedService : ServiceService){}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id')
    this.sharedService.GetEmploiById(this.id).subscribe(
      res => {
        this.OffrEmploi = res
      }, 
      err =>{
        console.log(err)
      }
    )
  }
  
Update(){
  this.sharedService.UpdateEmploi(this.id, this.OffrEmploi).subscribe(
    res => {
      this.OffrEmploi = res
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
    this.OffrEmploi.image = reader.result as string;
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
