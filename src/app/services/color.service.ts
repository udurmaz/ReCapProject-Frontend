import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../models/colorResponseModel';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44313/api/colors/getall";
  constructor(private httpClient : HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)
  
}
}
