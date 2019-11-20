import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { SWAPIService } from '../../services/swapi.service';
import { Film } from '../../services/models/film.model';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage {
  public film: Film = {
    title: '',
    producer: '',
    director: '',
    episode_id: '',
    opening_crawl: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, public loadingController: LoadingController, private swapiService: SWAPIService) {
    loadingController
      .create({
        message: 'Please wait...'
      })
      .then(loading => loading.present());

    this.route.params.subscribe((params: any) => {
      this.swapiService.getFilm(params['url']).subscribe((response: any) => {
        loadingController.dismiss();

        (this.film.title = response.title),
          (this.film.producer = response.producer),
          (this.film.director = response.director),
          (this.film.episode_id = response.episode_id),
          (this.film.opening_crawl = response.opening_crawl);
      });
    });
  }

  onClickGoBack() {
    this.router.navigate(['list']);
  }
}
