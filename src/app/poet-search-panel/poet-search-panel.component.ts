import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poet } from '../hb-classes/poet';

@Component({
  selector: 'hb-poet-search-panel',
  templateUrl: './poet-search-panel.component.html',
  styles: []
})
export class PoetSearchPanelComponent implements OnInit {

    @Input() rtl: string = '';
    @Input() poet: Poet;
    @Input() searchTerm: string = '';
    @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onSearchTermChange() {
      this.searchChange.emit(this.searchTerm);
    }

}
