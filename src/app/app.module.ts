import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { MaterialModule } from "./shared/material/material.module";
import { SpinnerModule } from "./shared/components/spinner";
import { PhotoGalleryComponent } from "./photo-gallery/photo-gallery.component";

@NgModule({
  declarations: [AppComponent, PhotoGalleryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
