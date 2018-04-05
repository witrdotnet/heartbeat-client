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
import { PoemsListComponent } from './poems-list/poems-list.component';
import { HomeComponent } from './home/home.component';
import { PoetHomeComponent } from './poet-home/poet-home.component';
import { PoetSearchPanelComponent } from './poet-search-panel/poet-search-panel.component';
import { PoemComponent } from './poem/poem.component';

import { NgxPaginationModule } from 'ngx-pagination';

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
    PoetsListComponent,
    PoemsListComponent,
    HomeComponent,
    PoetHomeComponent,
    PoetSearchPanelComponent,
    PoemComponent
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
    FormsModule,
    NgxPaginationModule
  ],
  providers: [HbRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
