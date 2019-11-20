import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public items: Array<{ title: string; note: string }> = [];

  constructor(private router: Router) {
    for (let i = 1; i < 100; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i
      });
    }
  }
}
