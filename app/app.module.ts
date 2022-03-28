import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollListComponent} from './infinite-scroll-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, InfiniteScrollListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
