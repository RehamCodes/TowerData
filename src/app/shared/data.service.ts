import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from 'app/dashboard/table-pagination.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://byanat.wiremockapi.cloud/api/v2/towers';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.apiUrl);
  }
}