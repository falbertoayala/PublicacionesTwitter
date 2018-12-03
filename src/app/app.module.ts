import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { DetalletwittComponent } from './detalletwitt/detalletwitt.component';

const routes : Routes = [
  { path : "", redirectTo: "post", pathMatch : "full"},
  { path : "post", component: TwitterComponent},
  { path : "post/:id", component : DetalletwittComponent},
]   







@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    DetalletwittComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
