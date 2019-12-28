import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TweetItem} from "../classes/tweet-item";
import {FeedResponse} from "../classes/feed-response";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {PostTweetRequest} from "../classes/post-tweet-request";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  tweetList: Array<TweetItem>;
  private tweet = '';
  constructor(private http: HttpClient) { }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  ngOnInit() {
    this.tweetList = new Array<TweetItem>();
  }

  carregarTweets(id) {
    this.tweetList = new Array<TweetItem>();
    this.http.get<FeedResponse>('http://localhost:8084/feed?userId=' + id)
      .subscribe((data) => {
      console.log(data);
      this.tweetList = data.response;
    });
  }

  postTweet() {
    const id = parseFloat(sessionStorage.getItem('current'));
    const requestBody: PostTweetRequest = {
      userId: id,
      tweet: this.tweet
    };
    this.http.post('http://localhost:8084/tweet', requestBody).subscribe((data) => {
      console.log(data);
      this.carregarTweets(sessionStorage.getItem('current'));
      this.tweet = '';
    });
  }
}
