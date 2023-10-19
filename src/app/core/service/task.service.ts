import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.models'; // Créez le modèle Tache selon votre structure


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7218/api/taches'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getTaches(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

}
