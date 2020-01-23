import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from 'src/app/services/login.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
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

  details: Login;
  username: string;
  pass: string;
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {}
  
  onLogin(form){
    this.firestore.doc('admin/'+form.userName || 'emp/'+form.userName).get().subscribe(
      res => {
         console.log(res.get('userName'));
         this.username = res.get('userName');
         this.pass = res.get('password');          
      }
    );
      
  

    if(this.pass = form.password){
      if(this.username = 'admin/'+form.userName )
      this.router.navigateByUrl('dash');
    }else{
      this.toastr.error("Wrong credentials!");
    }
  }
  
    

}
