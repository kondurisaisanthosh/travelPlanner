import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  newPost: Object;
  restaurants:any;
  constructor(private httpClient: HttpClient) { }
  search(cityname) {

    return this.httpClient.post('/hotels/data',
      {
        params: {
          searchKey: cityname
        }
      });
  }

  
}
