import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-gridview-home',
  templateUrl: './gridview-home.component.html',
  styleUrls: ['./gridview-home.component.css']
})
export class GridviewHomeComponent implements OnInit {
  calc2Cols = '2 2 calc(10em + 10px);';
  /** 10px is the missing margin of the missing box */
  calc3Cols = '3 3 calc(15em + 20px)';
  /** 20px is the missing margin of the two missing boxes */
  constructor(private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mdIconRegistry.addSvgIconInNamespace('img', 'jenkins',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/jenkins.svg'));
  }

}
