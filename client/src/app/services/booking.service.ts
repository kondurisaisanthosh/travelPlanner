import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  newPost: any;

  constructor(private httpClient: HttpClient) { }
  
  getBookedUsers(pack){
    console.log('in service get booked user');
    console.log(pack);
    return this.httpClient.post('api/travelagent/viewbookings',
      {
        params: {
          searchKey: pack,
        }
      })
  }
  storeBookedUsers(user){
    console.log('in service store booked user');
    console.log(user)
    this.httpClient.post('/api/travelagent/book/users',
      {
        params: {
          searchKey: user,
        }
      }).subscribe(response => {
        console.log(response);
        this.newPost = response
      });
  
  }

}
