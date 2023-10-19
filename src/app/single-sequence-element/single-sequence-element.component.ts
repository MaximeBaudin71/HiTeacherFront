import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementSequence } from '../models/element-sequence.model';
import { ElementSequenceService } from '../core/service/element-sequence.services';

@Component({
  selector: 'app-single-sequence-element',
  templateUrl: './single-sequence-element.component.html',
  styleUrls: ['./single-sequence-element.component.scss']
})
export class SingleSequenceElementComponent {

  @Input() elementSequence!: ElementSequence;
  buttonText!:string;

  constructor(private faceSnapService: ElementSequenceService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

  }

  
}
