import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hb-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class HbSidebarComponent implements OnInit {

  sidenavOpened: boolean = false;

  constructor() { }

  ngOnInit() {
    this.resetSideBar('');
  }

  resetSideBar(language: string) {
    // reset menu bar side (left or right)
  }

  toggle() {
    if (!this.sidenavOpened) {
      this.sidenavOpened = true;
    } else {
      this.sidenavOpened = false;
    }
  }
}
