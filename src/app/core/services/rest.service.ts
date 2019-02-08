import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment as env } from "../../../environments/environment";

/**
 * Performs http requests using `RestApi`.
 *
 * `RestApi` is available as an injectable class,
 *  with methods to perform http requests.
 * Returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 */
@Injectable({ providedIn: "root" })
export class RestApi {
  accessKey: string =
    "aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5";
  secretKey: string =
    "a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5";
  constructor(private http: HttpClient) {}
  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any) {
    return this.http
      .post(`${env.api}${url}`, JSON.stringify(body))
      .pipe(catchError(this.handleError));
  }
  /**
   * Performs a request with `get` http method.
   */
  get(url: string): Observable<any> {
    return this.http.get(`${env.api}${url}`).pipe(catchError(this.handleError));
  }
  /**
   * Parses error if any and then thorw with message.
   */
  handleError(error: HttpResponse<any> | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body: any = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error : error.toString();
    }
    return throwError(errMsg);
  }
}
