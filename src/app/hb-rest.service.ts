import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Poet } from './hb-classes/poet';
import { environment } from '../environments/environment';

@Injectable()
export class HbRestService {

  private heartbeatApi = environment.heartbeatApiRootUrl + '/HB.php/hbcore/poets/';

  constructor(private http: HttpClient, private translate: TranslateService) { }

  getPoets(): Observable<Poet[]> {
    return this.http.get<Poet[]>(this.heartbeatApi + this.translate.currentLang);
  }
}
