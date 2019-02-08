import { Injectable } from "@angular/core";

import { map } from "rxjs/operators";

import { RestApi } from "./core/services/rest.service";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private rest: RestApi) {}

  searchUser = (query: string) =>
    this.rest
      .get(
        `/search/users?client_id=${this.rest.accessKey}&page=1&query=${query}`
      )
      .pipe(map(resp => resp.results));

  validKeyStroke = keyCode => keyCode >= 65 && keyCode <= 90;
}
