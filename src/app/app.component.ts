import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rtl = '';
  sidenavPosition = 'start';
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ar');
    // handle rtl
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if(event.lang == 'ar') {
        console.log("to rtl");
        this.rtl = 'rtl';
        this.sidenavPosition = 'end';
      } else {
        console.log("to ltr");
        this.rtl = '';
        this.sidenavPosition = 'start';
      }
    });
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ar');
  }
}
