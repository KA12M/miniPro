import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/db';
import { LinkAllService } from 'src/app/services/link-all.service';

@Component({
  selector: 'app-form-game1',
  templateUrl: './form-game1.component.html',
  styleUrls: ['./form-game1.component.css']
})
export class FormGame1Component implements OnInit {
  game:Game={}

  constructor(public Service:LinkAllService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let chkid=null;
    for(let i of this.Service._game){
      if(i.id==this.game.id){
        chkid = i.id;
      } 
    } 
    if(chkid!=this.game.id){
      this.Service.addGame(this.game)
      this.game={} 
      chkid=null;
    }else{
      alert(`Id : ${this.game.id} Duplicate Id`); 
    } 
  }
}
