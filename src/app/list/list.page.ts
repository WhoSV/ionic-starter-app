import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public items: Array<{ title: string; director: string; url: string }> = [];

  constructor(private router: Router, private http: HttpClient, public loadingController: LoadingController) {
    loadingController
      .create({
        message: 'Please wait...'
      })
      .then(loading => loading.present());

    this.http.get('https://swapi.co/api/films/').subscribe((response: any) => {
      loadingController.dismiss();

      response.results.map((item: any) => {
        this.items.push({
          title: item.title,
          director: item.director,
          url: item.url
        });
      });
    });
  }

  onClickCard(item: any) {
    this.router.navigate(['detail', { url: item.url }]);
  }
}
