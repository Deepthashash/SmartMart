import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss']
})
export class UsersDialogComponent implements OnInit {

  constructor(private afs: AngularFirestore,private toastr: ToastrService) { }
  usersAddForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
     
  });

  onClick(formData){
    this.afs.collection('OtherUsers/').add({
       password: formData.Password ,
        UserName:formData.UserName,
    }).then( res => { 
      console.log('submitted');
    }, err=> {
      console.log(err);
    });
    this.toastr.success("Succesfully Submitted!");
 }
  ngOnInit() {
  }

}
