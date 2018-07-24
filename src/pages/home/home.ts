import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['Slider001.png','Slider002.png', 'Slider003.png']

  constructor(public navCtrl: NavController) {
        

  }
}
