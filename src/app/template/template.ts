import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatMenuModule,MatButtonModule,RouterOutlet,RouterLink],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  constructor(private router: Router) {}

  logout() {
    // Supprimer le token d'authentification du stockage local
    localStorage.removeItem('authToken'); 
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }

}
