import { Component } from '@angular/core';
import { ElementSequence } from '../../models/element-sequence.model';
import { ElementSequenceService } from '../../core/service/element-sequence.services';
import { ActivatedRoute, Router } from '@angular/router';
// import { writeFile } from 'fs';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.scss'],
  
})
export class AdminInterfaceComponent {
  newElementSequence: ElementSequence = new ElementSequence();
  elementSequences!: ElementSequence[];
  selectedFile: File | null = null;

  constructor(private elementSequenceService: ElementSequenceService, private elementSequencesServices: ElementSequenceService, private route: ActivatedRoute, private router: Router) {}



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // if (this.selectedFile) {
    //   writeFile('src/assets/' + this.selectedFile.name, this.selectedFile, (err) => {
    //     if (err) {
    //       console.error('Erreur lors de l\'enregistrement du fichier :', err);
    //     } else {
    //       console.log('Fichier enregistré avec succès !');
    //     }
    //   });
    // }
    
  }

  loadAllElements() {
    this.elementSequencesServices.getAllElements()
      .subscribe(data => {

        this.elementSequences = data;
      });
  }
  
      
  submitForm() {
    if (!this.isFormValid()) {
      // Gérer la validation, afficher des messages d'erreur, etc.
      return;
    }
  
    // Si le formulaire est valide, appeler un service pour soumettre les données au backend (API) :
    this.elementSequenceService.addElement(this.newElementSequence).subscribe(
      response => {
        // Gérer la réponse de l'API en cas de succès, par exemple :
        console.log('Élément de séquence créé avec succès.', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
        this.newElementSequence = new ElementSequence();
        this.loadAllElements(); 
      },
      error => {
        // Gérer les erreurs de l'API, par exemple :
        console.error('Erreur lors de la création de l\'élément de séquence.', error);
        // Afficher un message d'erreur à l'utilisateur ou effectuer des actions en cas d'erreur
      }
    );
  }


  isFormValid() {
    // Effectuer la validation du formulaire ici, par exemple :
    if (!this.newElementSequence.title || !this.newElementSequence.imageUrl) {
      return false; // Le formulaire n'est pas valide
    }
    return true; // Le formulaire est valide
  }

  toggleVisibility(element: ElementSequence) {
    this.elementSequenceService.updateVisibility(element.id, element.isVisible).subscribe(response => {
      // Gérer la réponse de l'API en cas de succès, par exemple :
      console.log('Update Visibilité.', response);
      // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
      this.newElementSequence = new ElementSequence();
    },
    error => {
      // Gérer les erreurs de l'API, par exemple :
      console.error('Erreur lors de l\'update de la visibilité.', error);
      console.log(element);
      // Afficher un message d'erreur à l'utilisateur ou effectuer des actions en cas d'erreur
    });
  }

  deleteElement(element: ElementSequence) {
    this.elementSequenceService.deleteElement(element.id).subscribe(response => {
      // Gérer la réponse de l'API en cas de succès, par exemple :
      console.log('Element supprimé', response);
      this.loadAllElements(); 
    },
    error => {
      // Gérer les erreurs de l'API, par exemple :
      console.error('Erreur lors de la suppression de l\'element.', error);
      console.log(element);
      // Afficher un message d'erreur à l'utilisateur ou effectuer des actions en cas d'erreur
    });
  }

    toggleSelection(element: ElementSequence): void {
    element.selectedForDeletion = !element.selectedForDeletion;
  }
  

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.loadAllElements();

    });
  }


}
