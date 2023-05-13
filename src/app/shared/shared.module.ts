import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    ToolbarComponent,
  ]
})
export class SharedModule { }
