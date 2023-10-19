import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';



  constructor(private authService: AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Stockez le token dans le stockage local ou les cookies sécurisés
        console.error('Authentification réussie');
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('admin');
      },
      (error) => {
        // Gérez les erreurs d'authentification
        console.error('Erreur d\'authentification', error);
      }
    );
    
  }

}