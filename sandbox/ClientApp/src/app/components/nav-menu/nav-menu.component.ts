import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  loggedIn: boolean;

  constructor(private session: AuthenticationService) { }

  ngOnInit() {
    this.session.session$.subscribe(val => {
      this.loggedIn = val.loggedIn;
    })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  endSession() {
    this.session.logOut();
  }
}
