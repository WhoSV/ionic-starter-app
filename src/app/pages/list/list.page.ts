import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { SWAPIService } from '../../services/swapi.service';
import { Films } from '../../services/models/films.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public films: Films[] = [];

  constructor(private router: Router, public loadingController: LoadingController, private swapiService: SWAPIService) {
    loadingController
      .create({
        message: 'Please wait...'
      })
      .then(loading => loading.present());

    this.swapiService.getAllFilms().subscribe((response: any) => {
      loadingController.dismiss();
      response.results.map((item: any) => {
        this.films.push({
          id: item.id,
          title: item.title,
          director: item.director,
          url: item.url
        });
      });
    });
  }

  onClickCard(film: any) {
    this.router.navigate(['detail', { url: film.url }]);
  }
}
