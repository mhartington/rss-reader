import { Component } from '@angular/core';
import { FeedService } from '../services/feed.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public rssFeed$ = this.feedService.fetchFeed()
    // fake delay to show loading template
    .pipe(delay(1000));
  constructor(private feedService: FeedService) {}

}
