import { ElementSequence} from '../../models/element-sequence.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ElementSequenceService {
  private apiUrl = 'https://hiteacherback.freelance-connexion.fr/api/ElementSequences'; // Remplacez par l'URL de votre API
  //private apiUrl = 'https://hiteacher.freelance-connexion.fr/api/ElementSequences'; // Remplacez par l'URL de votre API
  // private apiUrlASP = 'https://localhost:7218/api/ElementSequences';

  constructor(private http: HttpClient) { }

  getAllElements(): Observable<ElementSequence[]> {
    return this.http.get<ElementSequence[]>(this.apiUrl);
  }

  getElementsByNiveau(niveau: string): Observable<ElementSequence[]> {
    return this.http.get<ElementSequence[]>(`${this.apiUrl}/element/${niveau}`);
  }

  getElementsById(elementId: number): Observable<ElementSequence> {
    return this.http.get<ElementSequence>(`${this.apiUrl}/element/id/${elementId}`);
  }

  createNewElementSequence(elementSequence: ElementSequence): Observable<ElementSequence> {
    return this.http.post<ElementSequence>(this.apiUrl, elementSequence);
  }


    // Méthode POST pour ajouter un nouvel élément
    addElement(element: ElementSequence): Observable<ElementSequence> {
  
      return this.http.post<ElementSequence>(this.apiUrl, element);
    }

  updateVisibility(elementId: number, isVisible: boolean) {
    return this.http.put<ElementSequence>(`${this.apiUrl}/${elementId}/visibility`,  isVisible );
  }

  updateElement(element: ElementSequence) {
    return this.http.put<ElementSequence>(`${this.apiUrl}/element/${element.id}`,  element );
  }

    // Méthode DELETE pour supprimer un élément par son ID
    deleteElement(elementId: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${elementId}`);
    }

}
