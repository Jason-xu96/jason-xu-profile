import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavBarComponent,
    ProjectCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
