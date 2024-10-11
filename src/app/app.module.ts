import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfilComponent } from './profil/profil.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OffreComponent } from './offre/offre.component';
import {HttpClientModule} from '@angular/common/http';
import { StageDetailsComponent } from './stage-details/stage-details.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { UpdateEmploiComponent } from './update-emploi/update-emploi.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { JobListByCategoryComponent } from './job-list-by-category/job-list-by-category.component';
import { StageListByCategoryComponent } from './stage-list-by-category/stage-list-by-category.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    CategorieComponent,
    ProfilComponent,
    JobListComponent,
    JobDetailsComponent,
    TestimonialComponent,
    SignUpComponent,
    OffreComponent,
    StageDetailsComponent,
    UpdateStageComponent,
    UpdateEmploiComponent,
    SelectCategoryComponent,
    JobListByCategoryComponent,
    StageListByCategoryComponent,
    ProfilPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
