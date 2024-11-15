import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { AnnoucementService } from './services/annoucement.service';
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    AnnouncementComponent,
    FormComponent,
    ListeComponent
  ],

  providers: [AnnoucementService  ],



  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule  // Import the HTTP client module une atre fois dans cette classe 
  ]
})
export class AnnouncementModule { }
