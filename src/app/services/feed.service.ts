import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { parse } from 'simple-feed-parser';
@Injectable({
  providedIn: 'root',
})
export class FeedService {

  constructor(private http: HttpClient) {}
  fetchFeed(url = 'https://ionicframework.com/blog/feed/') {
    return this.http
      .get(url, { responseType: 'text' })
      .pipe(map((xml) => parse(xml)));
  }
}
