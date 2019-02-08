import { Component, OnDestroy, Input } from "@angular/core";

import { Subscription } from "rxjs";

import { GlobalErrorHandler } from "../core/services/error-handler";
import { PhotoGalleryService } from "./photo-gallery.service";
import { GRID, DATA_NOT_FOUND } from "../shared/graphics";

@Component({
  selector: "app-photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.scss"]
})
export class PhotoGalleryComponent implements OnDestroy {
  private _user: any;
  photos: any[] = [];
  resource = GRID;
  loading: boolean = false;
  subscription: Subscription;

  @Input() set user(value: any) {
    this._user = value;
    let username = (value && value.username) || "";
    if (username) {
      this.loading = true;
      this.subscription = this.photoGalleryService
        .getUserPhotos(username)
        .subscribe(
          data => {
            this.loading = false;
            this.photos = data;
            this.resource = data && data.length == 0 ? DATA_NOT_FOUND : GRID;
          },
          err => {
            this.loading = false;
            this.error.handleError(err);
          }
        );
    }
  }

  constructor(
    private photoGalleryService: PhotoGalleryService,
    private error: GlobalErrorHandler
  ) {}

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
