import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Poem } from '../hb-classes/poem';
import { Poet } from '../hb-classes/poet';
import { HbRestService } from '../hb-rest.service';
import { PaginationParam } from '../hb-classes/paginationParam';

@Component({
  selector: 'hb-poems-list',
  templateUrl: './poems-list.component.html',
  styles: []
})
export class PoemsListComponent implements OnChanges {

  @Input() rtl: string = '';
  @Input() poet: Poet;
  poems: Poem[] = [];
  paginationParam: PaginationParam = {
    itemsPerPage: 50,
    currentPage: 1,
    totalItems: 0
  };
  searchTerm: string = '';

    constructor(private hbRest: HbRestService) {
    }

    ngOnChanges(changes: SimpleChanges) {
      for (let propName in changes) {
        if(propName === "poet") {
          this.resetPoems();
        }
      }
    }

  getPage(page: number) {
      this.reloadPoems(page);
  }

  resetPoems() {
    this.reloadPoems(1);
  }

    reloadPoems(page: number) {
      this.hbRest.getPoems(this.poet.id, page, this.paginationParam.itemsPerPage, this.searchTerm).subscribe(response => {
        this.paginationParam.totalItems = response.totalItems;
        this.paginationParam.currentPage = page;
        this.poems = response.items;
      });
    }

    onSearchChange(event) {
    this.searchTerm = event;
    this.resetPoems();
    }
}
