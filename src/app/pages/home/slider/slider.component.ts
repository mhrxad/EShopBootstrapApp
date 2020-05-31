import { Component, OnInit } from '@angular/core';
import {Slider} from "../../../DTOs/Sliders/Slider";
import {DomainName} from "../../../Utilities/PathTools";
import {SliderService} from "../../../services/slider.service";


declare function sliderActivision():any;
@Component({
  selector: 'app-home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public sliders: Slider[] = [];
  public domain: string = DomainName;
  constructor(
    private sliderService: SliderService
  ) { }

  ngOnInit(): void {
    sliderActivision();

    this.sliderService.getCurrentSliders().subscribe(sliders => {
      if (sliders === null) {
        this.sliderService.GetSliders().subscribe(res => {
          if (res.status === 'Success') {
            this.sliderService.setCurrentSliders(res.data);
          }
        });
      } else {
        this.sliders = sliders;
        setInterval(() => {
          sliderActivision();
        }, 100);
      }
    });
  }

}
