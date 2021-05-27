import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./features/homepage/homepage.component";
import {InvoiceDetailsComponent} from "./features/invoice-details/invoice-details.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'invoice-app'},
  {path: 'invoice-app', component: HomepageComponent},
  {path: 'invoice-app/:id', component: InvoiceDetailsComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
