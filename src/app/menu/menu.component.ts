import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hb-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class HbMenuComponent implements OnInit {

  @Input() sidenav;

  constructor() { }

  ngOnInit() {
  }
}
