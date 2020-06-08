import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CurrentUserDTO} from "../../DTOs/Account/CurrentUserDTO";
import {AuthService} from "../../services/auth.service";

declare function headerDropdown(): any;

declare function mobileMeanmenu(): any;



@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit{

  user: CurrentUserDTO = null;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    mobileMeanmenu();
    headerDropdown();
    this.authService.getCurrentUser().subscribe(res => {
      this.user = res;
    });

  }






}
