import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatFormFieldModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatInputModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { DailogBodyComponent } from 'src/app/modules/dailog-body/dailog-body.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ProductsComponent,
    DailogBodyComponent,
  ],
  entryComponents:[
    DailogBodyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,

    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [
    DashboardService,
    ProductsService
  ]
})
export class DefaultModule { }
