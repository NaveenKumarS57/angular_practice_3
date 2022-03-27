import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryDataComponent } from './customer-dashboard/inquiry-data/inquiry-data.component';
import { SaleorderDataComponent } from './customer-dashboard/saleorder-data/saleorder-data.component';
import { DeliveryListComponent } from './customer-dashboard/delivery-list/delivery-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: 'delivery-list',
    component: DeliveryListComponent
  },
  {
    path: 'inquiry-data',
    component: InquiryDataComponent
  },
  {
    path: 'saleorder-data',
    component: SaleorderDataComponent
  }
];

@NgModule({
  declarations: [
    InquiryDataComponent,
    SaleorderDataComponent,
    DeliveryListComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
