import { Component, OnInit } from '@angular/core';
import { LinkAllService } from 'src/app/services/link-all.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public Service:LinkAllService) {}

  ngOnInit(): void {
  }

}
