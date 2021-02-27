import { Component } from '@angular/core';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public rssFeed$ = this.feedService.fetchFeed()
  constructor(private feedService: FeedService) {}
  ngOnInit(){}

}
