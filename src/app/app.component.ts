import { Component, OnInit } from '@angular/core';
import { SpacexService } from "./services/spacex.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  limit=100;
  spacexLaunches:Array<any>=[]
  years:Array<any>=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  filter:any={limit:100,launch_success:"",land_success:"",launch_year:""}
  constructor(private spacexService:SpacexService){

  }
  ngOnInit(){
    this.getFilterAll()
  }
  getAllLaunches(){
    this.spacexService.getAll(this.limit).subscribe(res=>{
      this.spacexLaunches=res;
    })
  }
  getFilterAll(){
    this.spacexLaunches=[]
    this.spacexService.getFilterLaunches(this.filter).subscribe(res=>{
      this.spacexLaunches=res;
      // console.log(res)
    })
  }
}
