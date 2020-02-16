import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {OtherUsers} from 'src/app/services/sysusers.model';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material';
import { UsersDialogComponent} from '../users-dialog/users-dialog.component';
import { UserUpdateDialogComponent} from '../user-update-dialog/user-update-dialog.component';
@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.component.html',
  styleUrls: ['./system-user.component.scss']
})
export class SystemUserComponent implements OnInit {

  details: OtherUsers[];
  constructor(private db:AngularFirestore, private service: ProductsService, public dialog:MatDialog) { }
  dataSource = this.details;  
  ngOnInit() {
    this.service.getsysUserDetails().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          userId: item.payload.doc.id, 
          ...item.payload.doc.data()
        } as OtherUsers;
      })
    })
  }

  openDialog(){
    this.dialog.open(UsersDialogComponent);
  }

  openUpdateDialog(details:OtherUsers){
    // console.log(details);
    this.dialog.open(UserUpdateDialogComponent,{
      data: details,
    });
  }

}
