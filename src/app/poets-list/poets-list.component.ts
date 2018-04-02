import { Component, OnInit, Input } from '@angular/core';
import { Poet } from '../hb-classes/poet';
import { HbRestService } from '../hb-rest.service';

@Component({
  selector: 'hb-poets-list',
  templateUrl: './poets-list.component.html',
  styles: []
})
export class PoetsListComponent implements OnInit {

  @Input() rtl: string;
  poets:Poet[] = [];
  poetsFiltered:Poet[] = [];

  constructor(private hbRest: HbRestService) {
    this.reloadPoets();
  }

  ngOnInit() {
  }

  reloadPoets() {
    this.hbRest.getPoets().subscribe(poets => {
      this.poets = poets;
      this.filterPoets("");
    });
  }

  filterPoets(searchTerm) {
    console.log("filter poets with " + searchTerm + " from " + this.poets.length);
    this.poetsFiltered = this.poets.filter( poet => searchTerm.length === 0 || poet.name.includes(searchTerm) );
  }

  onSearchChange(event) {
    console.log("poetsList onSearchChange " + event);
    this.filterPoets(event);
  }

}
