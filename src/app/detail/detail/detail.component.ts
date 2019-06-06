import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public today = new Date();
  public roomBookings = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getRoomBookings(0);
  }

  private getRoomBookings(id: number): void {
    this.http.get('./assets/mock-data/rooms.json').subscribe((rooms: any) => {
      this.roomBookings = rooms.filter(room => room.id === id)[0];
    });
  }

}
