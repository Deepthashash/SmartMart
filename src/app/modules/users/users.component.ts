import { Component, OnInit } from '@angular/core';
import { Barcode } from 'src/app/services/product.module';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { DailogBodyComponent } from '../dailog-body/dailog-body.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor() {}
  public component = 0;
  public name = "Registered Users";

  ngOnInit() {}

  selectComponent(x:number){
    this.component = x;
    if(this.component == 0)
      this.name = "Registered Users";
    else
      this.name = "Pending Users"
  }
}
