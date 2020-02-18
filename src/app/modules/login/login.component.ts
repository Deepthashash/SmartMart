import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from 'src/app/services/login.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/services/login.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private service: LoginService, private router: Router, private toastr: ToastrService) { }

  details: Login[];
  username: string;
  pass: string;
  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  ngOnInit() {}
  
  onLogin(form){
    this.firestore.collection('OtherUsers', ref => ref.where('userName', '==', form.userName,).where('password', '==', form.password,)).snapshotChanges().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          id: item.payload.doc.id, 
          ...item.payload.doc.data(),
        } as Login;
      })
    })
      
  

    if(this.details.length > 0){
      if(this.details[0].userType == 1 ){
        this.router.navigateByUrl('dash');
        localStorage.setItem('userType','0')
      }else{
        this.router.navigateByUrl('preOrder');
      }

    }else{
      this.toastr.error("Wrong credentials!");
    }
  }
  
    

}
