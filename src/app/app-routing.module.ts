import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import {IndexComponent} from './components/index/index.component'
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'
import { ReviewComponent } from './components/review/review.component';
import { FormGameComponent } from './components/form-game/form-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';  
import { FormGame1Component } from './components/form-game1/form-game1.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'blog',component:BlogComponent},
  {path:'reviews',component:ReviewComponent},
  {path:'form/game',component:FormGameComponent},
  {path:'form/game1',component:FormGame1Component},
  {path:'games',component:GamesComponent},
  {path:'game/detail/:id',component:GameDetailComponent},
  {path:'admin',component:AdminPageComponent},
  

  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
