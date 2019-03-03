import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'hb-main-search-panel',
  templateUrl: './main-search-panel.component.html',
  styles: []
})
export class MainSearchPanelComponent implements OnInit {

  public version: string = environment.VERSION;
  @Input() rtl: string = '';
  @Input() searchTerm: string = '';
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  onSearchTermChange() {
    this.searchChange.emit(this.searchTerm);
  }

}
