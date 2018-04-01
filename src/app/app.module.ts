import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { PoetsListComponent } from './poets-list/poets-list.component';

import { HbRestService } from './hb-rest.service';

// translate i18n ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
};

@NgModule({
  declarations: [
    AppComponent,
    HbtranslatePipe,
    HbMenuComponent,
    HbSidebarComponent,
    MainSearchPanelComponent,
    PoetsListComponent
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
        }),
    FormsModule
  ],
  providers: [HbRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
