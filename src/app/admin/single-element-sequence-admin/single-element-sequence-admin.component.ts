import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementSequenceService } from 'src/app/core/service/element-sequence.services';
import { ElementSequence } from 'src/app/models/element-sequence.model';

@Component({
  selector: 'app-single-element-sequence-admin',
  templateUrl: './single-element-sequence-admin.component.html',
  styleUrls: ['./single-element-sequence-admin.component.scss']
})
export class SingleElementSequenceAdminComponent {

  @Input() elementSequence!: ElementSequence;

  constructor(private elementSequenceService: ElementSequenceService,
    private route: ActivatedRoute, private router: Router) {}

    updateElement() {
      this.elementSequenceService.updateElement(this.elementSequence).subscribe(() => {
        // Gérez la mise à jour réussie
        console.log('Élément mis à jour avec succès');
        this.router.navigateByUrl(`/admin`);
      });
    }
    

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const elementId = +params['id']; // Convertissez l'ID en nombre si nécessaire
      this.elementSequenceService.getElementsById(elementId).subscribe((element) => {
        this.elementSequence = element;
      });
    });
  }


}
