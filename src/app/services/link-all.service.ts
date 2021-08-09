import { Contact, Game, Product } from './../models/db';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LinkAllService {
  _game:Game[]=[
    {id:1,gName:"Rov",gVersion:"4.2.1",gIcon:"https://data.apkshub.com/d0/com.garena.game.kgth/1.35.1.4/icon.png",
    gRecommend:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. "},
    {id:2,gName:"PB",gVersion:"11.1.12",gIcon:"https://play-lh.googleusercontent.com/IGOlY-TMU0cGW_I8EFKBkLACxPLu1TQqbqaqx7NUsGMyjNWIO1NdhwdBrq-71pUAHw",
    gRecommend:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua.  "},
    {id:3,gName:"PUBG",gVersion:"9.9.1",gIcon:"https://apps4u.store/wp-content/uploads/pubg-icon.png",
    gRecommend:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua.  "}
  ]
  _product:Product[]=[
    {
      id:1,GName:"Rov",imgGame:"https://www.item.in.th/pics/t3/7229-1.png",
      Price:800,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"arm.tales@gmail.com",UserName:"KARM",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"098765453",date:1627311877591,status:false
    },
    {
      id:2,GName:"Rov",imgGame:"https://www.freestore.in.th/uploads/202003251754284ID%20955%20%2016,500%E0%B8%BF_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%93%E0%B9%92%E0%B9%95_0051.jpg",
      Price:1100,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"arm@arm.com",UserName:"Mai",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0854123945",date:1627311877591,status:false
    },
    {
      id:3,GName:"PUBG",imgGame:"https://cdn-offer-photos.zeusx.com/68863b7f-59b5-4eaf-af9e-c17201596ff8.jpg",
      Price:2500,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"mari@gamil.com",UserName:"Mai",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0456985231",date:1627311877591,status:false
    },
    {
      id:4,GName:"PB",imgGame:"https://www.item.in.th/pics/t3/5795-1.jpg",
      Price:990,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"jame@arm.com",UserName:"James",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0789652341",date:1627311877591,status:false
    },
    {
      id:5,GName:"PUBG",imgGame:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/136113425/original/505e18fd64dff92468bb12d9c4981b61e3b48917/sale-account-of-pubg-mobile.png",
      Price:1500,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"first@arm.com",UserName:"first",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0849563217",date:1627311877591,status:false
    },
    {
      id:6,GName:"Rov",imgGame:"https://sites.google.com/site/shopidrov1/_/rsrc/1530079683888/id-rov-ep-2/rov4.jpg",
      Price:9999,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"bigtee@arm.com",UserName:"BigTee",facebook:"https://www.facebook.com/teeradet.tavarpinun",tel:"0918456988",date:1627311877591,status:false
    },
    {
      id:7,GName:"PB",imgGame:"https://www.item.in.th/pics/t3/7129-1.jpg",
      Price:450,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"moss@arm.com",UserName:"Moss",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0852147963",date:1627311877591,status:false
    },
    {
      id:8,GName:"PUBG",imgGame:"https://www.item.in.th/pics/t5/6008-1.jpg?1627573319",
      Price:780,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"jame@arm.com",UserName:"James",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0285419632",date:1627311877591,status:false
    },
    {
      id:9,GName:"PB",imgGame:"https://www.item.in.th/pics/t3/5795-1.jpg",
      Price:990,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"jame@arm.com",UserName:"James",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0789652341",date:1627311877591,status:false
    },
    {
      id:10,GName:"Rov",imgGame:"https://sites.google.com/site/shopidrov1/_/rsrc/1530079725898/id-rov-ep-3/rov5.jpg",
      Price:4500,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed elit varius, lobortis lorem nec, sagittis nulla. Donec sagittis ornare vulputate. ",
      email:"arm@arm.com",UserName:"KARM",facebook:"https://www.facebook.com/profile.php?id=100008223194364",tel:"0789652341",date:1627311877591,status:false
    }
  ]
  _contact:Contact[]=[
    {
      id:1,username:"KARM",email:"arm@arm.com",message:"Very Good!"
    }
  ]

  _Gname:string=''
  _img:string=''
 
  editPro={}

  filterValue="All"

  constructor(private router: Router) {}

  addProduct(p:any){
    this._product.push(p)
    alert("Add Product Succeed")
    this.router.navigate(['/games']);
  }

  Delete_Product(item:any){ 
    let Pro = this._product
    this._product=[]
    for(let i of Pro){
      if(i.id != item.id){
        this._product.push(i)
      }
    }
  }
 
  addContact(p:any){
    this._contact.push(p)
    alert(`Add Contact Succeed UserName : ${p.username}`)
    this.router.navigate(['/'])
  }

  Delete_Contact(item:any){
    let Con = this._contact
    this._contact=[]
    for(let i of Con){
      if(i.id != item.id){
        this._contact.push(i)
      }
    }
  }

  addGame(p:any){
    this._game.push(p)
    alert("Add Game Succeed")
    this.router.navigate(['/index']);
  }

  Delete_Game(item:any){
    let Game = this._game
    this._game=[]
    for(let i of Game){
      if(i.id != item.id){
        this._game.push(i)
      }
    }
  }

  isLoginAdmin() {
    let loginResult = localStorage.getItem(status);
    return loginResult != null;
  }
}
