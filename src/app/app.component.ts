import { Component } from '@angular/core';

@Component({
  selector: 'hb-root',
  template: `
  <mat-sidenav-container class="mainContainer">
    <mat-sidenav style="background-color:#333" #sidenav mode="side" [(opened)]="opened">
      <hb-sidebar></hb-sidebar>
    </mat-sidenav>
    <mat-sidenav-content>
      <div style="text-align:center">
        <hb-menu [sidenav]="sidenav"></hb-menu>
        <h1>Welcome to {{title | hbtranslate}}!</h1>
      </div>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [`
  .mainContainer{
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  }
`]
})
export class AppComponent {
  title = 'hb';
}
