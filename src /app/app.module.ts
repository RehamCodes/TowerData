import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { Angular2SmartTableModule } from "angular2-smart-table";
import { ParentComponent } from "./dashboard/parent.component";
import { BrowserModule } from "@angular/platform-browser";
import { ChartComponent } from "./dashboard/chart.component";
import { TablePagination } from "./dashboard/table-pagination.component";








@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    Angular2SmartTableModule,
    BrowserModule,
    TablePagination,
  ],
  declarations: [AppComponent, AdminLayoutComponent, ParentComponent,ChartComponent,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
