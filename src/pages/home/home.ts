import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityList, Activity } from '../activity-list';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  toDoList: Activity[];

  constructor(public navCtrl: NavController) {
    this.toDoList = ActivityList.activities;
  }

  showActivityInfo(activity: Activity) {
    this.navCtrl.push(InfoPage, {
      data: activity
    });
  }
}
