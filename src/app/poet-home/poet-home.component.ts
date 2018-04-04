import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Poet } from '../hb-classes/poet'
import { HbRestService } from '../hb-rest.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'hb-poet-home',
  template: `
  <hb-poet-search-panel [poet]="poet" (searchChange)="poemsList.onSearchChange($event)" [rtl]="rtl"></hb-poet-search-panel>
  <hb-poems-list #poemsList [poet]="poet" [rtl]="rtl"></hb-poems-list>
  `,
  styles: []
})
export class PoetHomeComponent implements OnInit {


  rtl: string = '';
  poet: Poet = {
    "id": -1,
    "name": ""
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hbRest: HbRestService,
    private translate: TranslateService
  ) {
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
    let id = this.route.snapshot.paramMap.get('id');
    this.hbRest.getPoet(Number(id)).subscribe(poet => {
      this.poet = poet;
    });
  }

}
