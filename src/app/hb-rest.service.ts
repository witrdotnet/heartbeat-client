import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Poet } from './hb-classes/poet';
import { Poem } from './hb-classes/poem';
import { environment } from '../environments/environment';

@Injectable()
export class HbRestService {

  private heartbeatApiPoets = environment.heartbeatApiRootUrl + '/HB.php/hbcore/poets/';
  private heartbeatApiPoet = environment.heartbeatApiRootUrl + '/HB.php/hbcore/poet/';
  private heartbeatApiPoems = environment.heartbeatApiRootUrl + '/HB.php/hbcore/poems/';
  private heartbeatApiPoem = environment.heartbeatApiRootUrl + '/HB.php/hbcore/poem/';

  constructor(private http: HttpClient, private translate: TranslateService) { }

  getPoets(): Observable<Poet[]> {
    return this.http.get<Poet[]>(this.heartbeatApiPoets + this.translate.currentLang);
  }

  getPoems(poetId: number): Observable<Poem[]> {
    return this.http.get<Poem[]>(this.heartbeatApiPoems + poetId);
  }

  getPoet(poetId: number): Observable<Poet> {
    return this.http.get<Poet>(this.heartbeatApiPoet + poetId);
  }

  getPoem(poetId: number, poemId: number): Observable<Poem> {
    return this.http.get<Poem>(this.heartbeatApiPoem + poetId + "/" + poemId);
  }
}
