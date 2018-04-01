import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hb-main-search-panel',
  templateUrl: './main-search-panel.component.html',
  styles: []
})
export class MainSearchPanelComponent implements OnInit {

  @Input() rtl: string = '';
  @Input() searchTerm: string = '';

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
