import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/db';
import { LinkAllService } from 'src/app/services/link-all.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact:Contact={id:Math.floor(Math.random() * 1000) + 1}
  status=""
  Admin="admin01"
  Password="1234"
  inputName?:string;
  inputPass?:string;

  goAdm(){
    this.inputName="admin01";
    this.inputPass="1234";
  }
  
  constructor(public Service:LinkAllService,public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(ContactBox:any){
    this.Service.addContact(this.contact); 
    this.contact={id:Math.floor(Math.random() * 1000) + 1}; 
  }

  loginAdmin(){
    if(this.Admin==this.inputName && this.Password==this.inputPass){
      alert("Login Succeed")
      localStorage.setItem(this.status,"Login Admin Succeed")
      this.inputName=""
      this.inputPass=""
      this.router.navigate(['/admin'])
    }else{
      alert("Login Failed")
    }
  }

  LogoutAdmin(){
    localStorage.removeItem(status);
    alert("Logout")
    this.router.navigate(['/index'])
  }
}
