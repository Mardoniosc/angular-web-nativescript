import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule
} from "@nativescript/angular";
import { AppRoutingModule } from "@src/app/app-routing.module";
import { AppComponent } from "@src/app/app.component";
import { InMemoryDataService } from "@src/app/in-memory-data.service";
import { AboutComponent } from "@src/app/pages/about/about.component";
import { MovieListComponent } from "@src/app/pages/movie-list/movie-list.component";
import { MobActionBarComponent } from "@src/app/shared/mob-action-bar/mob-action-bar.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MovieListComponent,
    MobActionBarComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      put204: false,
      dataEncapsulation: false,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
