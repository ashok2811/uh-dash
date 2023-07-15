import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from "./components/footer/footer.module";
import { ChartHolderModule } from "./components/chart-holder/chart-holder.module";
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { itemsReducer } from './store/reducers';
import { ItemsEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import {
    selectItems,
    selectLoading,
    selectError
  } from './store/selectors';
import { loadItems } from './store/actions';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeaderModule,
        FooterModule,
        ChartHolderModule,
        HttpClientModule, 
        StoreModule.forRoot({}), 
        EffectsModule.forRoot([]),
        StoreModule.forFeature('items', itemsReducer),
        EffectsModule.forFeature([ItemsEffects]),
        HighchartsChartModule
    ]
})
export class AppModule { }
export {
    loadItems, selectItems, selectLoading, selectError
}
