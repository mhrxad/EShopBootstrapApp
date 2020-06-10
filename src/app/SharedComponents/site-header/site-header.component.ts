import {Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CurrentUserDTO} from "../../DTOs/Account/CurrentUserDTO";
import {AuthService} from "../../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

declare function headerDropdown(): any;

declare function mobileMeanmenu(): any;


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  user: CurrentUserDTO = null;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    mobileMeanmenu();
    headerDropdown();
    this.authService.getCurrentUser().subscribe(res => {
      this.user = res;
    });

  }

  logOutUser() {

    /*this.authService.logOutUser().subscribe(res => {
  if (res.status === 'Success') {
    console.log('user is logged out');
  }
});*/

    this.cookieService.delete('eshop-cookie');
    this.authService.setCurrentUser(null);
    this.router.navigate(['/']);
    this.sweetAlert.fire();
  }


}
