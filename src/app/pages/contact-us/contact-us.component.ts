import { Component, OnInit } from '@angular/core';


declare function googleMap():any;
declare function init():any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      setInterval(() =>{
        googleMap();
      },1000);

  }

}
