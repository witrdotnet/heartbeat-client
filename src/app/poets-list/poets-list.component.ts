import { Component, OnInit, Input } from '@angular/core';
import { Poet } from '../hb-classes/poet';
import { HbRestService } from '../hb-rest.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { PaginationParam } from '../hb-classes/paginationParam';

@Component({
  selector: 'hb-poets-list',
  templateUrl: './poets-list.component.html',
  styles: []
})
export class PoetsListComponent implements OnInit {

  @Input() rtl: string = '';
  poets:Poet[] = [];
  paginationParam: PaginationParam = {
    itemsPerPage: 50,
    currentPage: 1,
    totalItems: 0
  };
  searchTerm: string = '';

  constructor(private translate: TranslateService, private hbRest: HbRestService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.resetPoets();
    });
  }

  ngOnInit() {
  }

  getPage(page: number) {
      this.reloadPoets(page);
  }

  resetPoets() {
    this.reloadPoets(1)
  }

  reloadPoets(page: number) {
    this.hbRest.getPoets(page, this.paginationParam.itemsPerPage, this.searchTerm).subscribe(response => {
      this.paginationParam.totalItems = response.totalItems;
      this.paginationParam.currentPage = page;
      this.poets = response.items;
    });
  }

  onSearchChange(event) {
    this.searchTerm = event;
    this.resetPoets();
  }

}
