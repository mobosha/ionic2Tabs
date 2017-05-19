import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  //页面即将进入
  ionViewWillEnter(){ 
    console.log("ionViewWillEnter1"); 
  }

  //页面已经进入
  ionViewDidEnter(){ 
    console.log("ionViewDidEnter1");     

  }

   // 页面即将进入
  ionViewWillLeave(){ 
    console.log("ionViewWillLeave1"); 
  }

  //页面已经进入
  ionViewDidLeave(){ 
    console.log("ionViewDidLeave1");
    
  }
  

}
