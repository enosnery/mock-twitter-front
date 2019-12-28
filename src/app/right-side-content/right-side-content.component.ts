import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';
import {UserResponse} from '../classes/user-response';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FollowRequest} from "../classes/follow-request";
import {MainContentComponent} from "../main-content/main-content.component";

@Component({
  selector: 'app-right-side-content',
  templateUrl: './right-side-content.component.html',
  styleUrls: ['./right-side-content.component.scss']
})
export class RightSideContentComponent implements OnInit {
  @Input() sibling: MainContentComponent;

  userList: Array<User>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<UserResponse>('http://localhost:8084/getusers?userId=1').subscribe(
      (data) => {
        this.userList = data.response;
      });
  }

  followUser(index) {
    const element = this.userList[index];
    const requestBody: FollowRequest = {
      userId: 1,
      followingId : element.id
    };
    if (element.isFollowing) {
      this.http.post('http://localhost:8084/unfollow', requestBody).subscribe((data) => {
        console.log(data);
        element.isFollowing = !element.isFollowing;
        this.sibling.carregarTweets();
      });
    } else {
      this.http.post('http://localhost:8084/follow', requestBody).subscribe((data) => {
        console.log(data);
        element.isFollowing = !element.isFollowing;
        this.sibling.carregarTweets();
      });
    }

  }
}
