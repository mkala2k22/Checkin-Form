import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IcheckinData } from '../model/checkinData';

@Injectable({
  providedIn: 'root'
})
export class CheckinAuthService {

  apiurl='http://localhost:3000/checkin';

  constructor(private http:HttpClient) { }

  authenticateCheckin(inputdata:any){
    return this.http.get<IcheckinData[]>(this.apiurl);
  }
}
