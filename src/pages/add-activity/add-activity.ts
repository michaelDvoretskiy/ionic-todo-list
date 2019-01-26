import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Activity } from '../activity-list';

@Component({
  selector: 'page-add-activity',
  templateUrl: 'add-activity.html',
})
export class AddActivityPage {

  newActivity: Activity = {
    name: '',
    date: new Date(),
    description: ''
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public view: ViewController) {
  }

  close() {
    this.view.dismiss();
  }

  save() {
    this.view.dismiss(this.newActivity);
  }
}
