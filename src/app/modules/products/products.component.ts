import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DailogBodyComponent } from '../dailog-body/dailog-body.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { Barcode } from 'src/app/services/product.module';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { PromotionsDialogComponent } from '../promotions-dialog/promotions-dialog.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  details: Barcode[];
  brandName: String;
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: ProductsService,private toastr: ToastrService) {}
  
  dataSource = this.details;  
  ngOnInit() {
    this.service.getProductDetails().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          barcodeNumber: item.payload.doc.id, 
          ...item.payload.doc.data()
        } as Barcode;
      })
    })
    // console.log(Date.now());
    // if(Date.now() > Number (localStorage.getItem('sDate')) && Date.now() < Number (localStorage.getItem('eDate'))){
    //   this.db.doc('Barcode_details/'+ localStorage.getItem('barcode')).update({
    //     price: Number(localStorage.getItem('price'))
    //   });
    //   console.log("hi");
    // }
    var snpshot = this.db.doc("Promotions/"+localStorage.getItem('barcode'));
    snpshot.ref.get().then((doc) => {
      if(Date.now() > doc.get("startDate") && doc.get("status") == "pending"){
        this.db.doc('Barcode_details/'+ localStorage.getItem('barcode')).update({
          price: doc.get("price"),
        });
        snpshot.update({
          status: "onGoing"
        })
      }else if(Date.now() > doc.get("endDate") && doc.get("status") == "onGoing"){
        this.db.doc('Barcode_details/'+ localStorage.getItem('barcode')).update({
          price: doc.get("initialPrice"),
        });
        snpshot.update({
          status: "finished"
        })
      }
    })
  }

  openDialog(){
    this.dialog.open(DailogBodyComponent);
  }

  statusCheck(pro){
    if(pro.reOrderLevel > pro.stock){
      console.log("hi");
    }
  }

   
  
  openUpdateDialog(details:Barcode){
    // console.log(details);
    this.dialog.open(UpdateDialogComponent,{
      data: details,
    });
  }

  onAddPromo(details:Barcode){
    // console.log(details);
    this.dialog.open(PromotionsDialogComponent,{
      data: details,
    });
  }

  onDelete(id:any){
    if(confirm("Are you sure, you want to delete this?")){
      this.db.doc('Barcode_details/'+id).delete();
    }
  }

  search(){
    if(this.brandName != ""){
      this.details = this.details.filter(res=>{
        return res.brand.toLocaleLowerCase().match(this.brandName.toLocaleLowerCase());
      });
    }else{
      this.ngOnInit();      
    }
    
  }

}
