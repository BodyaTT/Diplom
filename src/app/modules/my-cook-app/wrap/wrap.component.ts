import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit {
  user: firebase.User;
  constructor(
    private service: DataService,
    private afAuth:AngularFireAuth
    ) { }

  ngOnInit() {
    this.afAuth.authState
    .subscribe(user => {
      this.user = user;
    })
  }

  loginGoogle(){
    this.service.login();
  }

  logout(){
    this.service.logout();
  }
}
