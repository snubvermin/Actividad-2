import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DatePipe]
})
export class DashboardComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { 
  }
  userName: "";
  date;
  ngOnInit(): void {
    if(this.rutaActiva.snapshot.params.userName !== ""){
      this.userName = this.rutaActiva.snapshot.params.userName;
      this.date = new Date();
    }else{
      throw new Error("El User Name Viene Vacio");
    }
  }

}
