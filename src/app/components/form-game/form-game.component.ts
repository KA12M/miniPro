import { Component, OnInit } from '@angular/core';
import { LinkAllService } from 'src/app/services/link-all.service';
import { Product } from 'src/app/models/db';

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.css']
})
export class FormGameComponent implements OnInit {
  product:Product={ 
    date:Date.now(),
    status:false
  }

  constructor(public Service:LinkAllService) {

  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    let chkid=null;
    for(let i of this.Service._product){
      if(i.id==this.product.id){
        chkid = i.id;
      } 
    } 
    if(chkid!=this.product.id){
      this.Service.addProduct(this.product)
      this.product={ 
        date:Date.now(),
        status:false
      } 
      chkid=null;
    }else{
      alert(`Id : ${this.product.id} Duplicate Id`); 
    }  
  }
  
}

