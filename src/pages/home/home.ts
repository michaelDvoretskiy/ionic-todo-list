// https://www.joshmorony.com/build-a-todo-app-from-scratch-with-ionic-2-video-tutorial/
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivityList, Activity } from '../activity-list';
import { InfoPage } from '../info/info';
import { AddActivityPage } from '../add-activity/add-activity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  toDoList: Activity[];

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController) {
        this.toDoList = ActivityList.activities;
  }

  showActivityInfo(activity: Activity) {
    this.navCtrl.push(InfoPage, {
      data: activity,
      type: 'view'
    });
  }

  addActivity() {
    let addModal = this.modalCtrl.create(AddActivityPage);
    addModal.onDidDismiss(
      (data) => {
        if (data) {
          this.toDoList.push(data);
        }
      }      
    );
    addModal.present();
  }

  removeActivity(activity: Activity) {
    this.toDoList = this.toDoList.filter(
      obj => obj !== activity
    );
  }

  editActivity(activity: Activity) {
    this.navCtrl.push(InfoPage, {
      data: activity,
      type: 'edit',
      editCallback: (data) => {
        activity = data;
      }
    });
  }
}
