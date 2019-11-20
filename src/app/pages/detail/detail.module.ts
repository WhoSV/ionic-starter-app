import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SWAPIService } from '../../services/swapi.service';
import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailPage
      }
    ])
  ],
  declarations: [DetailPage],
  providers: [SWAPIService]
})
export class DetailPageModule {}
