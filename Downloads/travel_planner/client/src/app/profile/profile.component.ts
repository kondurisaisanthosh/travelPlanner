import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { HotelService } from '../services/hotel.service';
import { PackageService } from '../package.service';
import { Package } from '../entities/package.model';
import { BookedUser } from '../entities/bookeduser.model';
import { BookingService } from '../services/booking.service';
import { OwnBooking } from '../entities/ownbooking.model';
import { Holiday } from '../entities/holiday.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  destination: string;
  flight: string;
  hotel: string;
  date: string;
  days: string;
  packge: any;
  pname: string;
  packageFlag: any;
  tripFlag: any;
  holidaysFlag: any;
  myBookingsFlag: any;
  flightFlag: any;
  hotelFlag: any;
  Departure: any;
  arrival: any;
  arr_date: any;
  dep_date: any;
  bookings: any[];
  flightData: any;
  quotes: any;
  sourcecity: string;
  departureDate: string;
  numberdays: string;

  sourcecitySearch: string;
  destinationcitySearch: string;
  sourceCityArray: any;
  destCityArray: any
  carriers: any;
  carriersList: {};
  selectedFlightDepartue: any;
  selectedFlightPrice: any;
  selectedFligt: any;
  selfbookings: any[];
  viewBookingData: any;

  holidayname:any;
  HolidaystartDate:any;
  HolidayendDate:any;

  constructor(private service: AuthService, private httpClient: HttpClient, private hservice: HotelService, private pservice: PackageService, private booking: BookingService) { }
  user: any;
  city: any;
  restaurants: any;
  packname: any;

  hotelname: any;

  ngOnInit() {

    this.httpClient.get('/api/me').subscribe((data: any[]) => {
      this.user = data;
    })
    this.httpClient.get('/api/travelagent/data').subscribe((data: any[]) => {
      console.log(data);
      this.packge = data;
    })
    this.httpClient.get('/api/travelagent/bookings').subscribe((data: any[]) => {
      console.log(data);
      this.bookings = data;
    })
    this.httpClient.get('/api/user/selfbookings').subscribe((data: any[]) => {
      console.log('self bookings')
      console.log(data);
      this.selfbookings = data;
    })

  }
  sendRequest(user) {
    this.service.sendRequest(user);

  }
  searchRestaurants() {
    console.log('in search restaurants')
    console.log(this.destinationcitySearch)
    this.hservice.search(this.destinationcitySearch).subscribe(data => {
      this.restaurants = data;
      console.log(JSON.stringify(this.restaurants));
    }

    );

  }

  searchFlights(source, destination, date) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        'Content-Type': "text/plain;charset=UTF-8",
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '0f889d8acamsh70066d6d7cff126p11b6dejsn43a562fc581c',
        'Authorization': 'Basic ' + btoa('username:password')
      }), withCredentials: true
    };
    this.httpClient.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/' + source + '/' + destination + '/' + date, httpOptions).subscribe((data: any) => {
      console.log(data);
      this.carriersList = {}
      this.carriers = data.Carriers;
      this.carriers.forEach(element => {
        this.carriersList[element.CarrierId] = element.Name
      });
      this.quotes = data.Quotes;


    })
    this.searchRestaurants();
    // this.service.searchFlights().subscribe(data=>{
    //   // console.log(JSON.stringify(data));
    //   this.flightData=data;
    //   console.log('flight')
    //   console.log(this.flightData.Quotes);
    //   this.quotes=this.flightData.Quotes;
    //   console.log(this.quotes[0].OutboundLeg.OriginId);
    //   console.log(this.quotes[0].MinPrice);
    //   console.log(this.quotes[0].OutboundLeg.DestinationId);
    // });
  }


  searchSourceSuggestion(sourcecitySearch) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        'Content-Type': "text/plain;charset=UTF-8",
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '0f889d8acamsh70066d6d7cff126p11b6dejsn43a562fc581c',
        'Authorization': 'Basic ' + btoa('username:password')
      }), withCredentials: true
    };
    this.httpClient.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=' + sourcecitySearch, httpOptions).subscribe((data: any) => {
      console.log(data);

      this.sourceCityArray = data.Places;
    })

  }
  searchDestSuggestion(destinationcitySearch) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': "application/json",
        'Content-Type': "text/plain;charset=UTF-8",
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '0f889d8acamsh70066d6d7cff126p11b6dejsn43a562fc581c',
        'Authorization': 'Basic ' + btoa('username:password')
      }), withCredentials: true
    };
    this.httpClient.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=' + destinationcitySearch, httpOptions).subscribe((data: any) => {
      console.log(data);

      this.destCityArray = data.Places;
    })

  }

  bookHotel(hotel) {
    console.log(hotel);
    this.hotelname = hotel;

  }
  createHoliday(){
    const hpackage=new Holiday(this.holidayname,this.HolidaystartDate,this.HolidayendDate);
    this.service.holiday(hpackage);
  }

  source(source: any) {
    throw new Error("Method not implemented.");
  }
  createPackage() {
    const dpackage = new Package(this.packname, this.sourcecitySearch, this.destinationcitySearch, this.selectedFligt, this.hotelname, this.selectedFlightDepartue, this.numberdays, this.selectedFlightPrice, this.user.email);

    this.pservice.createPackage(dpackage);

  }
  ownBooking() {
    const ownbooking = new OwnBooking(this.sourcecitySearch, this.destinationcitySearch, this.selectedFligt, this.selectedFlightPrice, this.hotelname, this.selectedFlightDepartue, this.numberdays, this.user.email);
    this.pservice.selfBooking(ownbooking);
  }
  myPackage(user) {
    this.service.myPackages(user);
  }
  viewBookings(pack) {
    console.log('view bookings');
    this.booking.getBookedUsers(pack).subscribe(response => {
      console.log(response);
      this.viewBookingData = response;
    });;
  }
  bookPackage(pack) {
    const bookeduser = new BookedUser(pack, pack._id, this.user.name, this.user.email);
    this.booking.storeBookedUsers(bookeduser);
  }
  changeFlag(a, b, c, d, e) {
    this.flightFlag = a;
    this.hotelFlag = b;
    this.packageFlag = c;
    this.holidaysFlag = d;
    this.myBookingsFlag = e;

  }

  selectFlight(price, airplanename, time) {
    this.selectedFligt = airplanename;
    this.selectedFlightPrice = price;
    this.selectedFlightDepartue = time;
  }

}
