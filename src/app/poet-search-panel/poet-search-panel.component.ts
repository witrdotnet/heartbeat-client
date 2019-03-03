import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poet } from '../hb-classes/poet';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'hb-poet-search-panel',
  templateUrl: './poet-search-panel.component.html',
  styles: []
})
export class PoetSearchPanelComponent implements OnInit {

    public version: string = environment.VERSION;
    @Input() rtl: string = '';
    @Input() poet: Poet;
    @Input() searchTerm: string = '';
    @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private translate: TranslateService) { }

    ngOnInit() {
    }

    onSearchTermChange() {
      this.searchChange.emit(this.searchTerm);
    }

    openPoetWiki() {
      var wikiURL = "http://" + this.translate.currentLang.substring(0,2).toLowerCase() + ".wikipedia.org/wiki/" + this.poet.name.replace(" ","_");
      window.open(wikiURL, "_blank");
    }

}
