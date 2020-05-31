import {Component, OnInit} from '@angular/core';

declare function headerDropdown(): any;

declare function mobileMeanmenu(): any;

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    mobileMeanmenu();
    headerDropdown();


  }

}
