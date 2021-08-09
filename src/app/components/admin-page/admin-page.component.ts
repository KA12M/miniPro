import { Product } from 'src/app/models/db';
import { LinkAllService } from './../../services/link-all.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  formProduct:Product={}
  fst=false
 
  constructor(public Service:LinkAllService,public router: Router) {
    if(Service.isLoginAdmin()==false){
      this.router.navigate(['/index']);
    }
  }

  ngOnInit(): void {
  }

  Del(item:any){
    if(item.GName!=null){
      this.Service.Delete_Product(item)
    }else if(item.gName!=null){
      this.Service.Delete_Game(item)
    }else{
      this.Service.Delete_Contact(item)
    } 
  }

  _formProduct(item:any){
    this.formProduct = item;
    this.fst = true;
  }
  
  onSub(){}
}
