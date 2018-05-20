import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Poet, PoetsSearchResult } from './hb-classes/poet';
import { Poem, PoemsSearchResult } from './hb-classes/poem';
import { environment } from '../environments/environment';

@Injectable()
export class HbRestService {

  private heartbeatApiPoets = environment.heartbeatApiRootUrl + '/poets/';
  private heartbeatApiPoet = environment.heartbeatApiRootUrl + '/poet/';
  private heartbeatApiPoems = environment.heartbeatApiRootUrl + '/poems/';
  private heartbeatApiPoem = environment.heartbeatApiRootUrl + '/poem/';

  constructor(private http: HttpClient, private translate: TranslateService) { }

  getPoets(page: number, itemsPerPage: number, searchTerm: string): Observable<PoetsSearchResult> {
    var from: number = (page -1) * itemsPerPage;
    return this.http.get<PoetsSearchResult>(this.heartbeatApiPoets + this.translate.currentLang + "/" + searchTerm + "/" + itemsPerPage + "/" + from);
  }

  getPoems(poetId: number, page: number, itemsPerPage: number, searchTerm: string): Observable<PoemsSearchResult> {
    var from: number = (page -1) * itemsPerPage;
    return this.http.get<PoemsSearchResult>(this.heartbeatApiPoems + poetId + "/" + searchTerm + "/" + itemsPerPage + "/" + from);
  }

  getPoet(poetId: number): Observable<Poet> {
    return this.http.get<Poet>(this.heartbeatApiPoet + poetId);
  }

  getPoem(poetId: number, poemId: number): Observable<Poem> {
    return this.http.get<Poem>(this.heartbeatApiPoem + poetId + "/" + poemId);
  }
}
