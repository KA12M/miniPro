import { Component } from '@angular/core';
import { Contact } from './models/db';
import { LinkAllService } from './services/link-all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chkSession=[] 

  constructor(public Service:LinkAllService) { }

  title = 'project-app';

  
}
