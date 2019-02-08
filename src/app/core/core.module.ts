import { ErrorHandler, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../shared/material/material.module";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { GlobalErrorHandler } from "./services/error-handler";
import { NotificationService } from "./services/notification.service";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  providers: [GlobalErrorHandler, NotificationService]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
