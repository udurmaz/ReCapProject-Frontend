import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImageModel';
import { Car } from 'src/app/models/cars';
import { CarDetailByIdService } from 'src/app/services/carDetailById.service';
import { CarImagesByIdService } from 'src/app/services/carImagesById.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:Car;
  carImages:CarImage[]=[];
  
  constructor(
    private carDetailByIdService:CarDetailByIdService,
    private carImagesByIdService:CarImagesByIdService,
    private activatedRoute:ActivatedRoute,
    
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsById(params["id"])
        this.getImagesById(params["id"])
      }
  })
  // 
}

  getCarsById(id:number){
    this.carDetailByIdService.getCarDetailById(id).subscribe(response=>{
      this.carDetails=response.data[0];
    })
  }
  getImagesById(id:number){
    this.carImagesByIdService.getCarImagesById(id).subscribe(response=>{
      this.carImages=response.data;
      
    })
  }
  
}