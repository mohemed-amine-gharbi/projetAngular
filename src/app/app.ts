import { Component } from '@angular/core';
import { Member } from './member/member';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Member, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LAB';
}
