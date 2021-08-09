import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; 
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamesComponent } from './components/games/games.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { ReviewComponent } from './components/review/review.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormGameComponent } from './components/form-game/form-game.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LinkAllService } from './services/link-all.service';
import { FooterComponent } from './components/footer/footer.component';
import { FormGame1Component } from './components/form-game1/form-game1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent, 
    IndexComponent,
    NavbarComponent,
    GamesComponent,
    GameDetailComponent,
    ReviewComponent,
    BlogComponent,
    FormGameComponent,
    AdminPageComponent,
    FooterComponent,
    FormGame1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  
 
}
