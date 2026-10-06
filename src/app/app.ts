import { Component } from '@angular/core';
import { Member } from './member/member';
import { Router, RouterOutlet } from '@angular/router';
import { Template } from './template/template';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';


@Component({
  selector: 'app-root',
  imports: [Member, RouterOutlet,Template,Dashboard,Tools,Articles,Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LAB';
}
