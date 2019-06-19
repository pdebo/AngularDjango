import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from "../../constants";

@Component({
  selector: 'app-associate-card',
  templateUrl: './associate-card.component.html',
  styleUrls: ['./associate-card.component.css']
})
export class AssociateCardComponent implements OnInit {

  @Input() associate;

  constructor() { }

  ngOnInit() {
  }

  imageUrl(image: string): string {
    return AppConstants.imageUrl(image);
  }

}
