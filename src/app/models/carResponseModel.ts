import { Car } from "./cars";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:Car[];
}