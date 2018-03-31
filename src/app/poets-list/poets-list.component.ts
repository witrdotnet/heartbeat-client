import { Component, OnInit, Input } from '@angular/core';
import { Poet } from '../hb-classes/poet';
import { HbRestService } from '../hb-rest.service';

@Component({
  selector: 'hb-poets-list',
  templateUrl: './poets-list.component.html',
  styles: []
})
export class PoetsListComponent implements OnInit {

  @Input() rtl;
  poets:Poet[] = [];

  constructor(private hbRest: HbRestService) {
    this.reloadPoets();
  }

  ngOnInit() {
  }

  reloadPoets() {
    this.hbRest.getPoets().subscribe(poets => this.poets = poets);
  }

}
