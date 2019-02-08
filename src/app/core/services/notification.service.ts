import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  notify(message: string, action: string = "", duration = 2000) {
    this.snackBar.open(message, action, {
      duration
    });
  }
}
