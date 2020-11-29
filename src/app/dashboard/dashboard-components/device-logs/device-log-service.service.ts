import {Observable} from 'rxjs';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeviceLogServiceService {

  readonly api: any = {
    getListDeviceLogs: '/rest/device/list/log'
  };

  constructor(private http: HttpClient) {
  }

  getListDeviceLogs(): Observable<any> {
    const headers = {'X-CSRFToken': this.getCookie('csrftoken')};
    console.log(this.getCookie('csrftoken'));
    const options = {headers: headers};
    const Observable = this.http.get(this.api.getListDeviceLogs, options);
    return Observable;
  }

  private getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      // tslint:disable-next-line:triple-equals
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }


  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
