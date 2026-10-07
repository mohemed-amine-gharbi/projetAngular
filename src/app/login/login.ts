import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [CommonModule,MatTableModule,MatIconModule,RouterLink,FormsModule,MatFormField,MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //injection de dependance
  constructor(private   AS: AuthService , private router: Router) {}
  email: string = '';
  password: string = '';
  login () {
    this.AS.signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      // Connexion réussie  
      this.router.navigate(['/member']); // Rediriger vers la page du tableau de bord
    })
    


  }

}
