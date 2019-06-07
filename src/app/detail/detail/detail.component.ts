import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public today = new Date();
  public room: any;
  public roomBookings = [];
  public selectedBooking = 0;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const roomId = this.route.snapshot.params.id;
    this.getRoomBookings(roomId);
  }

  private getRoomBookings(id: number): void {
    this.http.get('./assets/mock-data/rooms.json').subscribe((rooms: any) => {
      const roomFound = rooms.filter((room: any) => room.id == id);
      if (roomFound.length > 0) {
        this.room = roomFound[0];
        if (this.room.bookings) {
          this.roomBookings = this.room.bookings;
        } else {
          this.roomBookings = [];
        }
      }
    });
  }

  public selectBooking(booking: number) {
    this.selectedBooking = booking;
  }

  public goToDashboard() {
    this.router.navigate([
      '/dashboard'
    ]);
  }

}
