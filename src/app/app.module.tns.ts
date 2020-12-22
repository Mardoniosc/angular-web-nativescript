import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule
} from "@nativescript/angular";
import { AppRoutingModule } from "@src/app/app-routing.module";
import { AppComponent } from "@src/app/app.component";
import { AboutComponent } from "@src/app/pages/about/about.component";
import { MovieListComponent } from "@src/app/pages/movie-list/movie-list.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [AppComponent, AboutComponent, MovieListComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
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
