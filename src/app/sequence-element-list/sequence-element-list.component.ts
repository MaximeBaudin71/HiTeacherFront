
import { ElementSequence } from '../models/element-sequence.model';
import { ElementSequenceService } from '../core/service/element-sequence.services';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sequence-element-list',
  templateUrl: './sequence-element-list.component.html',
  styleUrls: ['./sequence-element-list.component.scss']
})
export class SequenceElementListComponent {
  elementSequences!: ElementSequence[];
  niveau: string = '';

  constructor(private elementSequencesServices: ElementSequenceService,  private route: ActivatedRoute) {}

  loadElementsByNiveau(niveau: string) {
    this.elementSequencesServices.getElementsByNiveau(niveau)
      .subscribe(data => {
        this.elementSequences = data.filter(element => element.isVisible === true);
      });
  }

  loadAllElements() {
    this.elementSequencesServices.getAllElements()
      .subscribe(data => {
        this.elementSequences = data;
      });
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data['niveau'] === null) {
        this.loadAllElements();
      } else {
        this.loadElementsByNiveau(data['niveau']);
      }

      // this.niveau = data['niveau'];
      // this.loadElementsByNiveau(this.niveau);
    });
  }

      
}


