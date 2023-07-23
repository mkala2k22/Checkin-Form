import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckinAuthService {
  apiurl='http://localhost:3000/checkin';

  constructor(private http:HttpClient) { }

  authenticateCheckin(inputdata:any){
    return this.http.get(this.apiurl);
  }
}
