import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  newPost: Object;
  constructor(private httpClient: HttpClient) { }

  createPackage(dpackage)
  {
    console.log(dpackage);
    this.httpClient.post('/api/travelagent/create',
      {
        dpackage
      }).subscribe(response => {
        console.log(response);
        this.newPost = response
      });
  }
  selfBooking(ownbooking){
    console.log(ownbooking);
    this.httpClient.post('/api/user/selfbooking',
    {
      ownbooking
    }).subscribe(response =>{
      console.log(response);
      this.newPost=response;
    })
  }
  
}
