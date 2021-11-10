import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class CricCoinInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const reqClone = req.clone({
      url: this._getBackendCompleteUrl(req.url)
    });
    return next.handle(reqClone);
  }


  private _getBackendCompleteUrl(url: string): string {
    return 'https://api.coinstats.app/public/v1' + url;
  }
}
