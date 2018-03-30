import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// translate i18n ngx-translate
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HbtranslatePipe } from './hbtranslate.pipe';
import { HbMenuComponent } from './menu/menu.component';
import { HbSidebarComponent } from './sidebar/sidebar.component';
import { MainSearchPanelComponent } from './main-search-panel/main-search-panel.component';

// translate i18n ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
};

@NgModule({
  declarations: [
    AppComponent,
    HbtranslatePipe,
    HbMenuComponent,
    HbSidebarComponent,
    MainSearchPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
