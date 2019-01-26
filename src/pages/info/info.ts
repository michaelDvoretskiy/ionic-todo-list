import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Activity } from '../activity-list';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  toDo: Activity;
  isEdit: boolean = false;
  theDate: any;
  editCallback: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.toDo = navParams.get('data');
      this.theDate = this.toDo.date.toISOString();
      const type = navParams.get('type');
      if (type === 'edit') {
        this.isEdit = true;
        this.editCallback = navParams.get('editCallback');
      }
  }

  save() {
    this.toDo.date = new Date(this.theDate);
    this.editCallback(this.toDo);
    this.navCtrl.pop();
  }
}
