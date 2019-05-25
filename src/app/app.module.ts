import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
            HttpClientModule,
            AppRoutingModule,
            SharedModule,
            LayoutModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
