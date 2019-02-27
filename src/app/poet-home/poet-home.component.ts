import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Poet } from '../hb-classes/poet'
import { Poem } from '../hb-classes/poem'
import { HbRestService } from '../hb-rest.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'hb-poet-home',
  template: `
  <hb-poet-search-panel *ngIf="poet" [poet]="poet" (searchChange)="poemsListComponent.onSearchChange($event)" [rtl]="rtl"></hb-poet-search-panel>
  <hb-poems-list *ngIf="poet && !selectedPoem" #poemsListComponent [poet]="poet" [rtl]="rtl"></hb-poems-list>
  <hb-poem *ngIf="poet && selectedPoem" class="hb-poem-panel" [poem]="selectedPoem" [poet]="poet"></hb-poem>
  `,
  styles: []
})
export class PoetHomeComponent implements OnInit {

  @ViewChild('poemsListComponent') public poemsListComponent;

  rtl: string = '';
  poet: Poet;
  selectedPoem: Poem;

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
    let poetid = this.route.snapshot.paramMap.get('poetid');
    let poemid = this.route.snapshot.paramMap.get('poemid');
    this.hbRest.getPoet(Number(poetid)).subscribe(poet => {
      this.poet = poet;
      if(this.poet && poemid) {
        this.hbRest.getPoem(Number(poetid), Number(poemid)).subscribe(poem => {
          this.selectedPoem = poem;
        });
      }
    });
  }

}
