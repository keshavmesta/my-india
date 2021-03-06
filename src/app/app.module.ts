import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { CrimeInTheCityComponent } from './layouts/crime-in-the-city/crime-in-the-city.component';
import { OurLeadersComponent } from './layouts/our-leaders/our-leaders.component';
import { routing } from './app.routing';
import { OurRiversComponent } from './layouts/our-rivers/our-rivers.component';
import { GridTableComponent } from './components/grid-table/grid-table.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { AccidentInCitiesComponent } from './layouts/accident-in-cities/accident-in-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CrimeInTheCityComponent,
    OurLeadersComponent,
    OurRiversComponent,
    GridTableComponent,
    BarChartComponent,
    DataListComponent,
    AccidentInCitiesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
