import { Component, OnInit } from '@angular/core';
import {FilterProductsDTO} from "../../DTOs/Products/FilterProductsDTO";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filterProducts: FilterProductsDTO = new FilterProductsDTO(
    '', 0, 0, 1, 0, 0, 0, 6, 0, 1, []
  );
  isLoading = true;
  pages: number[] = [];

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      let pageId = 1;
      if (params.pageId !== undefined) {
        pageId = parseInt(params.pageId, 0);
      }

      this.filterProducts.pageId = pageId;
      this.getProducts();
    });
  }

  setPage(page: number) {
    this.router.navigate(['products'], {queryParams: {pageId: page}});
  }

  nextpage(){
      this.router.navigate(['products'], {queryParams: {pageId: this.filterProducts.pageId+1}});
  }

  getProducts() {
    this.productsService.getFilteredProducts(this.filterProducts).subscribe(res => {
      this.filterProducts = res.data;
      if (res.data.title === null) {
        this.filterProducts.title = '';
      }
      this.isLoading = false;
      this.pages = [];
      for (let i = this.filterProducts.startPage; i <= this.filterProducts.endPage; i++) {
        this.pages.push(i);
      }
    });
  }

}
