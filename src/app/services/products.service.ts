import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IResponseResult} from "../DTOs/Common/IResponseResult";
import {FilterProductsDTO} from "../DTOs/Products/FilterProductsDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFilteredProducts(): Observable<IResponseResult<FilterProductsDTO>> {
    return this.http.get<IResponseResult<FilterProductsDTO>>('/products/filter-products');
  }

}
