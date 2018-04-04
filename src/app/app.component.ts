import { Component, ViewChild } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'hb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('sidenav') public sidenav;
  rtl: string = '';
  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('ar');
    // handle rtl
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.sidenav.close();
      if(event.lang == 'ar') {
        this.rtl = 'rtl';
        this.sidenav.position = 'end';
      } else {
        this.rtl = '';
        this.sidenav.position = 'start';
      }
    });
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if(this.translate.currentLang === undefined) {
    console.log("currenLang is undefined");
      this.translate.use('ar');
    }
  }

}
