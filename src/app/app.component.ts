import { Component } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

import { Subscription } from "rxjs";

import { AppService } from "./app.service";
import { DATA_NOT_FOUND } from "./shared/assets/data";

const OPERATOR_MENU_GAP_LARGE = 64;
const OPERATOR_MENU_GAP_SMALL = 54;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  users: any = [];
  selectedUser: any;
  subscription: Subscription;
  loading: boolean = false;
  resource = DATA_NOT_FOUND;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService
  ) {}

  get extraSmallScreen() {
    return this.breakpointObserver.isMatched("(max-width: 601px)");
  }

  get menuGap() {
    return this.extraSmallScreen
      ? OPERATOR_MENU_GAP_SMALL
      : OPERATOR_MENU_GAP_LARGE;
  }

  get sideNavMode() {
    return this.smallScreen ? "over" : "side";
  }

  get smallScreen() {
    return this.breakpointObserver.isMatched("(max-width: 901px)");
  }

  onKeyUp(e: any) {
    if (this.appService.validKeyStroke(e.keyCode)) {
      console.log(e.keyCode);
      let query = e.target.value;
      if (query && query.length > 2) {
        this.loading = true;
        this.users = [];
        this.subscription = this.appService.searchUser(query).subscribe(
          resp => {
            this.users = resp;
          },
          err => console.log(err),
          () => (this.loading = false)
        );
      }
    }
  }

  showPhotos(user) {
    this.selectedUser = user;
  }
}
