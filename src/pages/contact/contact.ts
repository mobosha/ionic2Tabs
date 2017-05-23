import { Component } from '@angular/core';
import { LoadingController, AlertController, ToastController, ModalController   } from 'ionic-angular';
import { Register } from './register';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: any;

  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.user = {username:"",password:""};
  }
  
  login(){
    if(!this.user.username || this.user.username.length<=3){
      let toast = this.toastCtrl.create({
        message: "输入的用户名格式不正确",
        // duration: 3000,
        position: 'top', //top middle bottom
        showCloseButton: true,
        closeButtonText: "关闭",
        cssClass : "danger2"
      });
      toast.present();
      
      // let alert = this.alertCtrl.create({  //如果输入内容错误，弹出alert窗口，点击ok 关闭 有点多次一举，必须点击ok 进行修改内容 所以使用 Toast 提示错误消息
      //   title: '用户中心',
      //   subTitle: '输入的用户名格式不正确', // 什么都不输入this.username 的值是undefined，没有初始化所以不是空字符串
      //   buttons: ['OK']
      // });
      // alert.present();
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

  // 打开注册窗口
  openRegisterPage(){
    let profileModal  = this.modalCtrl.create(Register);
    profileModal.present();
    
  }

}
