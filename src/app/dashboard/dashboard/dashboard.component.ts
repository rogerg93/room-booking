import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public today = new Date();
  public rooms: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.rooms = this.getRoomsData();
  }

  private getRoomsData(): Observable<any> {
    return this.http.get('./assets/mock-data/rooms.json');
  }

}
