import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { RestApi } from "./../core/services/rest.service";

@Injectable({
  providedIn: "root"
})
export class PhotoGalleryService {
  constructor(private rest: RestApi) {}

  getUserPhotos = (username: string) => {
    return this.rest.get(
      `/users/${username}/photos?client_id=${this.rest.accessKey}`
    );
  };
}
