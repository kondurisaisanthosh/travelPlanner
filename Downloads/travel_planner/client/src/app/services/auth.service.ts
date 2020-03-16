import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  newPost: any;
  appuser:any;
  decuser:any;
  requser:any;
  email:any;
  apiURL: '/requestdata';
  city: any;

  constructor(private httpClient: HttpClient) { }
  sendRequest(requser) {
    console.log('santosh');
    console.log(requser);
    this.httpClient.post('/requestdata',
      {
        params: {
          searchKey: this.requser
        }
      }).subscribe(response => {
        console.log(response);
        this.newPost = response
      });
  }
  decline(decuser)
  {
    console.log(decuser);
    this.httpClient.post('api/admin/decline',
      {
        params: {
          searchKey: decuser
        }
      }).subscribe(response => {
        console.log(response);
        //this.newPost = response
      });
  }
  approve(email,id)
  {
    console.log(email);
    this.httpClient.post('api/admin/approval',
      {
        params: {
          searchKey: email,
          searchid:id
        }
      }).subscribe(response => {
        console.log(response);
        //this.newPost = response
      });
  }
  holiday(hpackage)
  {
    console.log(hpackage);
    this.httpClient.post('/api/travelagent/createholiday',
      {
        params: {
          searchKey: hpackage,
        }
      }).subscribe(response => {
        console.log(response);
      });
  }


  delete(id)
  {
    this.httpClient.post('api/admin/package/delete',
      {
        params: {
          searchKey: id,
        }
      }).subscribe(response => {
        console.log(response);
        this.newPost = response
      });
  }

  deleteHoliday(id)
  {
    this.httpClient.post('api/admin/holiday/delete',
      {
        params: {
          searchKey: id,
        }
      }).subscribe(response => {
        console.log(response);
      });
  }

  searchFlights(){
      return this.httpClient.get<any>('api/travelagent/flights'
        // {
          // params: {
          //   searchKey: user.email,
          // }
       // }
       );

  }


  myPackages(user){
    this.httpClient.post('api/travelagent/package/mypackages',
      {
        params: {
          searchKey: user.email,
        }
      }).subscribe(response => {
        console.log(response);
        this.newPost = response
      });
  
  }
}

