import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.scss']
})
export class ActiveAccountComponent implements OnInit {

  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  isLoading = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.activateUser(this.activatedRoute.snapshot.params.activeCode).subscribe(res => {
      if (res.status === 'Success') {
        this.isLoading = false;
        this.sweetAlert.fire();
        setInterval(() => {
          this.router.navigate(['login']);
        },3000);

      }
    });
  }

}
