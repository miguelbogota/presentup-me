import { Component, OnInit } from '@angular/core';
import { ILink } from '@app-models/link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Routes to show in the footer
  links: ILink[] = [
    { displayName: 'Privacidad', url: 'legal/privacy' },
    { displayName: 'Legal', url: 'legal/terms'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
