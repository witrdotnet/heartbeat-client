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
    console.log("toggle sidenav");
    if (!this.sidenavOpened) {
      this.sidenavOpened = true;
      console.log("switch to true " + this.sidenavOpened);
    } else {
      this.sidenavOpened = false;
      console.log("switch to false " + this.sidenavOpened);
    }
  }
}
