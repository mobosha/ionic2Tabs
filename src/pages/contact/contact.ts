import { Component } from '@angular/core';
import { LoadingController, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // enum use {username, password};
  username: string;
  password: string;
  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    
  }
  
  login(){
    if(!this.username || this.username.length<=3){
      let alert = this.alertCtrl.create({
        title: '用户中心',
        subTitle: '输入的用户名格式不正确', // 什么都不输入this.username 的值是undefined，没有初始化所以不是空字符串
        buttons: ['OK']
      });
      alert.present();
    }else{
    let loading = this.loadingCtrl.create({
      content: "Please wait...", //一般不添加文字不优雅，状态很多不贴切
      spinner: "dots",
      duration: 3000 //默认没有什么意义，主要根据下边的dismiss();
    });
    loading.present();

    // alert(this.username);
    // console.log(this.password);
    
    //真是的逻辑应该是：去请求登陆的API，返回结果后，进行 loading
    setTimeout(() => {
        loading.dismiss();
    }, 3000);

    }
  }

}
