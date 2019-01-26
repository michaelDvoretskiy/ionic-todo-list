import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Activity } from '../activity-list';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  toDo: Activity;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.toDo = navParams.get('data');
  }

}
