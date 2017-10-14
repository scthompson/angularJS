import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-custom-svgs',
  templateUrl: './custom-svgs.component.html',
  styleUrls: ['./custom-svgs.component.css']
})
export class CustomSvgsComponent implements OnInit {

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('linkedin-box', sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin-box.svg'));
  }

  ngOnInit() {
  }

}
