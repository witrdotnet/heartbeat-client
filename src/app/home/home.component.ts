import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'hb-home',
  template: `
  <hb-main-search-panel (searchChange)="poetsList.onSearchChange($event)" [rtl]="rtl"></hb-main-search-panel>
  <hb-poets-list #poetsList [rtl]="rtl"></hb-poets-list>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  rtl: string = '';

  constructor(private translate: TranslateService) {
    this.refreshRTL();
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.refreshRTL();
    });
  }

  refreshRTL() {
    if(this.translate.currentLang.substring(0,2).toUpperCase() == 'AR') {
      this.rtl = 'rtl';
    } else {
      this.rtl = '';
    }
  }

  ngOnInit() {
  }

}
