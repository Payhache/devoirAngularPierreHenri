import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PcListComponent } from './components/pc-list/pc-list.component';
import { PcDetailsComponent } from './components/pc-details/pc-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PcAddComponent } from './components/pc-add/pc-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    PcDetailsComponent,
    MenuComponent,
    HomeComponent,
    PcAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
