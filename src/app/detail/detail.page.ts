import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage {
  public item = {
    title: '',
    director: '',
    producer: '',
    episode_id: '',
    opening_crawl: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, public loadingController: LoadingController) {
    loadingController
      .create({
        message: 'Please wait...'
      })
      .then(loading => loading.present());

    this.route.params.subscribe((params: any) => {
      this.http.get(params['url']).subscribe((response: any) => {
        loadingController.dismiss();

        (this.item.director = response.director),
          (this.item.title = response.title),
          (this.item.producer = response.producer),
          (this.item.episode_id = response.episode_id),
          (this.item.opening_crawl = response.opening_crawl);
      });
    });
  }

  onClickGoBack() {
    this.router.navigate(['list']);
  }
}
