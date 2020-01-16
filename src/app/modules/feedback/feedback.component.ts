import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/services/feedback.model';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  details: Feedback[];
  brandName: String;
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: ProductsService) {}
  
  dataSource = this.details;  
  ngOnInit() {
    this.service.getFeedBack().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          // barcodeNumber: item.payload.doc.id, 
          ...item.payload.doc.data()
        } as Feedback;
      })
    })
  }

}
