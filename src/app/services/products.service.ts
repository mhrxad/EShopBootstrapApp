import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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

  getFilteredProducts(filter: FilterProductsDTO): Observable<IResponseResult<FilterProductsDTO>> {
    let params;
    if (filter !== null) {
      params = new HttpParams()
        .set('pageId', filter.pageId.toString())
        .set('title', filter.title)
        .set('startPrice', filter.startPrice.toString())
        .set('endPrice', filter.endPrice.toString())
        .set('takeEntity', filter.takeEntity.toString());
    }

    return this.http.get<IResponseResult<FilterProductsDTO>>('/products/filter-products', {params});
  }

}
