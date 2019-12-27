import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TweetItem} from "../classes/tweet-item";
import {FeedResponse} from "../classes/feed-response";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  tweetList: Array<TweetItem>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarTweets();
  }

  carregarTweets() {
    this.http.get<FeedResponse>('http://localhost:8084/feed?userId=1').subscribe((data) => {
      console.log(data);
      this.tweetList = data.response;
      });
  }
}
