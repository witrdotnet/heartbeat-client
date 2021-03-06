import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// translate i18n ngx-translate
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthenticationService } from './hb.auth.service';
import { PoemsListComponent } from './poems-list/poems-list.component';
import { HomeComponent } from './home/home.component';
import { PoetHomeComponent } from './poet-home/poet-home.component';
import { PoetSearchPanelComponent } from './poet-search-panel/poet-search-panel.component';
import { PoemComponent } from './poem/poem.component';
import { JwtInterceptor } from './hb.jwt.interceptor';

import { NgxPaginationModule } from 'ngx-pagination';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

// translate i18n ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("63362889028-c8ansooj7coeda1mii0a94uoh4ga1677.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

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
    SocialLoginModule,
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
  providers: [
    HbRestService,
    AuthenticationService,
    {
        provide: AuthServiceConfig,
        useFactory: provideConfig
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
