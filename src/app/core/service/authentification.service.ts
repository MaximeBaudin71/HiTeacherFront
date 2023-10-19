import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'https://hiteacherback.freelance-connexion.fr/api'; // Remplacez par l'URL de votre API
  private token!: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    console.log(this.apiUrl);
    return this.http.post(`${this.apiUrl}/login_check`, body);
  }

  // getToken(): string {
  //   return localStorage.getItem('token')?.toString;
  // }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token'); // Récupère le token depuis le stockage local ou les cookies
    if (token) {
      const expirationDate = new Date(0); // Initialisation de la date d'expiration
      expirationDate.setUTCSeconds(this.getExpirationDateFromToken(token));
  
      // Vérifie si la date d'expiration est ultérieure à la date actuelle
      
      return expirationDate > new Date();
    }
    return false;
  }
  
  private getExpirationDateFromToken(token: string): number {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    return tokenData.exp;
  }
}
