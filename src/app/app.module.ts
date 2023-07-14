import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from "./components/footer/footer.module";
import { ChartHolderModule } from "./components/chart-holder/chart-holder.module";

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
        ChartHolderModule
    ]
})
export class AppModule { }
