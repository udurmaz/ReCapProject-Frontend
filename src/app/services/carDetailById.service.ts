
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/cars';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailByIdService {

  apiUrl="https://localhost:44313/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetailById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarDetailById?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
