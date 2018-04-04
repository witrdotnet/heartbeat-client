import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Poem } from '../hb-classes/poem'
import { Poet } from '../hb-classes/poet'
import { HbRestService } from '../hb-rest.service';

@Component({
  selector: 'hb-poems-list',
  templateUrl: './poems-list.component.html',
  styles: []
})
export class PoemsListComponent implements OnChanges {

  @Input() rtl: string;
  @Input() poet: Poet;
  poems: Poem[] = [];
  poemsFiltered: Poem[];

    constructor(private hbRest: HbRestService) {
    }

    ngOnChanges(changes: SimpleChanges) {
      for (let propName in changes) {
        if(propName === "poet") {
          this.reloadPoems();
        }
      }
    }

    reloadPoems() {
      console.log("reloadPoets:" + this.poet.id);
      this.hbRest.getPoems(this.poet.id).subscribe(poems => {
        this.poems = poems;
        this.filterPoems("");
      });
    }

    filterPoems(searchTerm) {
      this.poemsFiltered = [];
      if (this.poems) {
        this.poemsFiltered = this.poems.filter( poem =>
          searchTerm.length === 0 ||
          poem.name.includes(searchTerm) ||
          poem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }

    onSearchChange(event) {
      this.filterPoems(event);
    }
}
