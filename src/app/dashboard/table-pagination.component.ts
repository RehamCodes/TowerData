import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { HttpClient } from "@angular/common/http";
import { DataService } from "app/shared/data.service";

@Component({
  selector: "table-pagination",
  styleUrls: ["./table-pagination.component.css"],
  templateUrl: "./table-pagination.component.html",
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePagination implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "towerId",
    "operator",
    "address",
    "height",
    "towerType",
    "latitude",
    "longitude",
    "technology",
  ];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data: PeriodicElement[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  operator: string;
  towerId: number;
  address: string; 
  height: number;
  towerType: string;
  latitude: number;
  longitude: number;
  technology: string;
}
