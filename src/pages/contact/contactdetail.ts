import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contactDetail',
  templateUrl: 'contactdetail.html'
})
export class ContactDetails {
  item;
  constructor(public params: NavParams) {
    this.item = params.data.item;

  }


}
