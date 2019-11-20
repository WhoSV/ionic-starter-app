import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public items: Array<{ title: string; director: string; url: string }> = [];

  constructor(private router: Router, private http: HttpClient) {
    this.http.get('https://swapi.co/api/films/').subscribe((response: any) => {
      response
        ? response.results.map((item: any) => {
            this.items.push({
              title: item.title,
              director: item.director,
              url: item.url
            });
          })
        : null;
    });
  }

  onClickCard(item: any) {
    this.router.navigate(['detail', { url: item.url }]);
  }
}
