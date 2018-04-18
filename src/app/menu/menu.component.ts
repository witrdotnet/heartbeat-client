import { Component, OnInit, Input } from '@angular/core';
import { User } from '../hb-classes/user';
import { AuthenticationService } from '../hb.auth.service';

@Component({
  selector: 'hb-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class HbMenuComponent implements OnInit {

  @Input() rtl;
  @Input() sidenav;

  currentUser: User;
  model: any = {};
  loading = false;

  constructor(public authService: AuthenticationService) {
    this.refreshCurrentUser();
  }

  ngOnInit() {
    this.refreshCurrentUser();
  }

  login() {
      this.loading = true;
      this.authService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                this.model.password = null;
                this.loading = false;
                this.refreshCurrentUser();
              },
              error => {
                this.model.password = null;
                this.loading = false;
                this.refreshCurrentUser();
              });
  }

  logout() {
    this.authService.logout();
  }

  refreshCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
