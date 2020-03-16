import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  packge: any[];
  holidaysFlag: any;
  holidays: any[];

  constructor(private service:AuthService,private httpClient:HttpClient) { }
  data:any;
  user:any;
  requestsFlag:boolean;
  availablePackageFlag:boolean;
  
  ngOnInit() {

    this.requestsFlag=true;
    this.availablePackageFlag=false;
    this.httpClient.get('/api/data').subscribe((data: any[])=>{
      this.data = data;
    })  
    this.httpClient.get('/api/travelagent/data').subscribe((data: any[])=>{
      console.log(data);
      this.packge = data;

      }) 
      this.httpClient.get('/api/holiday/data').subscribe((data: any[])=>{
        console.log(data);
        this.holidays = data;
  
        }) 
  }
  decline(user)
  {
    this.service.decline(user._id);
  }
  approve(user)
  {
    this.service.approve(user.email,user._id);
  }
  delete(pack)
  {
    this.service.delete(pack._id);
  }
  deleteHoliday(holiday){
    this.service.deleteHoliday(holiday._id);
  }

  changeFlag(a,b,c){
    this.requestsFlag=a;
    this.availablePackageFlag=b;
    this.holidaysFlag=c;
  }


}
