import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    RecentOrdersComponent,
    NewUsersComponent,
    ProgressBarComponent,
    SalesStatisticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
