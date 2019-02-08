import { ErrorHandler, Injectable, Inject } from "@angular/core";
import { has } from "lodash";

import { NotificationService } from "../../core/services/notification.service";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private alert: NotificationService) {
    super();
  }

  handleError(error: any) {
    super.handleError(error);

    if (has(error, "status") && error.status === 401) {
      this.alert.notify(this.getErrorMessage(401), "Okay", 5000);
      return;
    }

  }

  getErrorMessage = errorId => {
    const errors = {
      "1": " Oops something went wrong, please try again.",
      default: "No data found.",
      "401": "You are not authorized or your session is expired."
    };
    return errors[errorId] || errors["default"];
  };
}
