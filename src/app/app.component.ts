import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `Menu <ul>
    <li> <a [routerLink] ="['/Home']"> Home</a></li>
  <li> <a [routerLink] ="['/Apply']"> Apply Application</a></li>
  <li> <a [routerLink] ="['/View']"> View Application</a></li>
  <li> <a [routerLink] ="['/Query']"> Query</a></li>
  <li> <a [routerLink] ="['/ContactUs']"> Contact Us</a></li>
  <li> <a [routerLink] ="['/Feedback']"> Feedback</a></li>
  </ul><hr><hr>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test1';
}
