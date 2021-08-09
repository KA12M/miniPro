import { Component, OnInit } from '@angular/core';
import {LinkAllService} from '../../services/link-all.service'
import { Game } from 'src/app/models/db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  filterValue:any="All"

  ShowProduct:any=[]

  constructor(public Service:LinkAllService,public router: Router) { 
    this.filterValue = Service.filterValue;
    this.ChooseFilter()
  }
   
  ngOnInit(): void {
    
  }   
  
  ChooseFilter(){
    this.ShowProduct=[]
    if(this.filterValue=="All"){
      for(let item of this.Service._product){this.ShowProduct.push(item)}
    }else{
      for(let item of this.Service._product){
        if(item.GName == this.filterValue){
          this.ShowProduct.push(item)
        }
      }
    }
  }

  ShowDetail(item:any){
    this.router.navigate(['/game/detail',item.id])
  }
   
}
