import { Component,ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef:Tabs;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  constructor() {
    
  }

  ionViewWillEnter() {
    // Let's navigate from TabsPage to Page1
    console.log('ionViewWillEnter');
  }

  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    console.log('ngAfterViewInit');
  }

  //页面已经进入
  ionViewDidEnter(){ 
    console.log('ionViewDidEnter');     
    let mainTabs = this.tabRef; 
    mainTabs.select(1); 
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }
  
  ionViewCanEnter(){
    console.log("ionViewCanEnter");
  }
 
  

}
