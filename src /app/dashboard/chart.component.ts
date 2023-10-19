import { Component,ViewChild } from "@angular/core";
import { PeriodicElement } from "./table-pagination.component";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DataService } from "app/shared/data.service";

@Component({
  selector: "bar-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
  // imports: [MatTableModule, MatPaginatorModule],
})
export class ChartComponent {
  count4G: number;
  count3G: number;
  count2G: number;
  count5G: number;

  dataSource = new MatTableDataSource<PeriodicElement>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data: PeriodicElement[]) => {
      // Initialize separate arrays for each technology
      const filteredData4G: PeriodicElement[] = [];
      const filteredData3G: PeriodicElement[] = [];
      const filteredData2G: PeriodicElement[] = [];
      const filteredData5G: PeriodicElement[] = [];
  
      // Iterate through the data and filter based on technology
      data.forEach(item => {
        switch (item.technology) {
          case '4G':
            filteredData4G.push(item);
            break;
          case '3G':
            filteredData3G.push(item);
            break;
          case '2G':
            filteredData2G.push(item);
            break;
          case '5G':
            filteredData5G.push(item);
            break;
          // Add more cases for other technologies if needed
        }
      });
  
      // Calculate the counts
      const count4G = filteredData4G.length;
      const count3G = filteredData3G.length;
      const count2G = filteredData2G.length;
      const count5G = filteredData5G.length;
  
      // Log the counts
      console.log('Count of 4G:', count4G);
      console.log('Count of 3G:', count3G);
      console.log('Count of 2G:', count2G);
      console.log('Count of 5G:', count5G);
      this.count4G = count4G;
      this.count3G = count3G;
      this.count2G = count2G;
      this.count5G = count5G;
      
    });
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

