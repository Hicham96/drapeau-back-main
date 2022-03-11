import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
pays:any
  mc:string=""
  motCle:string="";
  constructor(private Service : ServiceService) { }

  ngOnInit(): void {
    this.getPays();
  }

  private getPays() {
    this.Service.getPays()
      .subscribe(data=>{
        this.pays=data;

        console.log(data)
      },err=>{
        console.log(err);
      });
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.pays.filter = filterValue.trim().toLowerCase();
  }

  search(){
    this.Service.getSpays(this.motCle)
      .subscribe(data=>{
        this.pays=data;

        console.log(data)
      },err=>{
        console.log(err);
      });
  }
  chercher(){
    this.search();
  }
}
