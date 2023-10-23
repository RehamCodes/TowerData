import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TablePagination } from "./table-pagination.component";

describe("DashboardComponent", () => {
  let component: TablePagination;
  let fixture: ComponentFixture<TablePagination>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablePagination],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
