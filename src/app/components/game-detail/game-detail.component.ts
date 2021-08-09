import { LinkAllService } from './../../services/link-all.service';
import { Component, OnInit } from '@angular/core'; 
import {ActivatedRoute, Params} from '@angular/router'
import { Product } from 'src/app/models/db';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  ShowImg=false;
  ShowPipe=false;
  ShowPipe1=false;
  detail_id?:number;

  detail_product:any={};
  detail_game:any={};
   
  constructor(public Service:LinkAllService,public ActivatedRoute: ActivatedRoute) {
      
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.detail_id = id;
    })

    for(let item of this.Service._product){
      if(item.id == this.detail_id){
        this.detail_product = item 
        break
      }
    } 
    for(let item of this.Service._game){
      if(item.gName == this.detail_product.GName){
        this.detail_game = item;
        break;
      }
    }
  } 
}
