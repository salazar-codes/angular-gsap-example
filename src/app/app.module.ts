import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollTriggerComponent } from './scroll-trigger/scroll-trigger.component';
import { FadeInComponent } from './fade-in/fade-in.component';
import { ScrollTriggerAppleComponent } from './scroll-trigger-apple/scroll-trigger-apple.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollTriggerComponent,
    FadeInComponent,
    ScrollTriggerAppleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
