import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserResponse} from "../classes/user-response";
import {User} from "../classes/user";
import {MainContentComponent} from "../main-content/main-content.component";
import {RightSideContentComponent} from "../right-side-content/right-side-content.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() main: MainContentComponent;
  @Input() right: RightSideContentComponent;

  users: Array<User>;
  currentUser: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    sessionStorage.clear();
    this.currentUser = 0;
    this.users = new Array<User>();
    this.http.get<UserResponse>('http://localhost:8084/getusers?userId=0').subscribe((data) => {
      console.log(data);
      this.users = data.response;
    });
  }
  carregarUsuario() {
    sessionStorage.setItem('current', this.currentUser.toString());
    this.main.carregarTweets(sessionStorage.getItem('current'));
    this.right.carregarOutrosUsuarios(sessionStorage.getItem('current'));
  }
}
