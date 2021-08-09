import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LinkAllService} from '../../services/link-all.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public Service:LinkAllService,public router: Router) { }

  ngOnInit(): void {
  }

  goShop(item:any){
    this.Service.filterValue = item.gName 
    this.router.navigate(['/games'])
  }
}
