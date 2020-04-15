import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example2Component } from './example2/example2.component';
import { Example1Component } from './example1/example1.component';
import { PetListComponent } from './cmps/pet-list/pet-list.component';
import { PetPreviewComponent } from './cmps/pet-preview/pet-preview.component';
import { PetFilterComponent } from './cmps/pet-filter/pet-filter.component';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Example2Component,
    Example1Component,
    PetListComponent,
    PetPreviewComponent,
    PetFilterComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
