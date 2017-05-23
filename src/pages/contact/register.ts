import { Component } from '@angular/core';
import {  ViewController, NavController } from 'ionic-angular';

import {  ContactDetails } from './contactdetail';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  contacts:[{id:number,name:string,text:string}];
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    this.contacts = [{id:1,name:"ss",text:"ddd"},{id:2,name:"ff",text:"ooo"},{id:4,name:"gg",text:"eee"},{id:4,name:"gg",text:"mmm"}];
  }
  //取消按钮
  dismiss(){
    this.viewCtrl.dismiss();
  }

  //列表点击
  itemClick(event,contact){
    console.log(contact.name,event);
    this.navCtrl.push(ContactDetails, {item:contact});
  }
}