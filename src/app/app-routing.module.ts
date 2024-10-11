import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfilComponent } from './profil/profil.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OffreComponent } from './offre/offre.component';
import { StageDetailsComponent } from './stage-details/stage-details.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { UpdateEmploiComponent } from './update-emploi/update-emploi.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { JobListByCategoryComponent } from './job-list-by-category/job-list-by-category.component';
import { StageListByCategoryComponent } from './stage-list-by-category/stage-list-by-category.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index' , component: IndexComponent},
  {path: 'section', component: SectionComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'categorie', component: CategorieComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'job-list', component: JobListComponent},
  {path: 'job-details', component:JobDetailsComponent },
  {path: 'testimonial', component: TestimonialComponent},
  {path: 'offre', component:OffreComponent},
  {path: 'signUp', component: SignUpComponent},
  {path : 'stage-details/:id', component : StageDetailsComponent},
  { path: 'job-details/:id', component: JobDetailsComponent },
  {path: 'update-stage/:id', component: UpdateStageComponent},
  {path: 'update-emploi/:id', component: UpdateEmploiComponent},
  {path: 'job-list/:id', component: JobListComponent},
  {path: 'select-category', component: SelectCategoryComponent},
  {path: 'job-list-by-category/:category', component: JobListByCategoryComponent},
  {path: 'stage-list-by-category/:category', component: StageListByCategoryComponent},
  {path: 'profil-page', component: ProfilPageComponent},
  {path: '**', component: IndexComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
