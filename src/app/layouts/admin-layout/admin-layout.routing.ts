import { Routes } from "@angular/router";
import { TablePagination } from "../../dashboard/table-pagination.component";
import { ParentComponent } from "../../dashboard/parent.component";
import { MapsComponent } from "../../maps/maps.component";
import { ChartComponent } from "app/dashboard/chart.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: TablePagination },
  { path: "chart", component: ChartComponent },
  { path: "maps", component: ParentComponent },
];
