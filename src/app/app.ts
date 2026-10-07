import { Component, OnInit } from '@angular/core';
import { Member } from './member/member';
import { Router, RouterOutlet } from '@angular/router';
import { Template } from './template/template';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { Login } from './login/login';


@Component({
  selector: 'app-root',
  imports: [Member, RouterOutlet,Template,Dashboard,Tools,Articles,Events,AngularFireAuthModule,AngularFireModule,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private router: Router) {}
  b:boolean = false;
  ngOnInit() :void {
    this.router.events.subscribe(() => {
      this.b = this.router.url !== '/login';
    });
  }

}
