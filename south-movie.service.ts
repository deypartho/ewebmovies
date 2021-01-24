import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configration } from "./config";

@Injectable({
  providedIn: 'root'
})
export class SouthMovieService {
  config = configration;
  constructor(private _http: HttpClient) { }
  
  getSouthMovie(){
    return this.config;
  }
  getSouthMovieDetail(id: number){
    return this.config.southHindiDetail[id -1];
  }
}
