import { Component, OnInit, Input } from '@angular/core';
import { Poet } from '../hb-classes/poet';
import { HbRestService } from '../hb-rest.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'hb-poets-list',
  templateUrl: './poets-list.component.html',
  styles: []
})
export class PoetsListComponent implements OnInit {

  @Input() rtl: string = '';
  poets:Poet[] = [];
  poetsFiltered:Poet[] = [];
  p: number = 1;

  constructor(private translate: TranslateService, private hbRest: HbRestService) {
    this.reloadPoets();
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.reloadPoets();
    });
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
    this.poetsFiltered = this.poets.filter( poet =>
      searchTerm.length === 0 ||
      poet.name.includes(searchTerm) ||
      poet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onSearchChange(event) {
    this.filterPoets(event);
  }

}
