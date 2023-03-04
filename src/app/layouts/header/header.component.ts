import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userEmail: string = ""
  isUserLoggedIn$: Observable<boolean> | undefined

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
   // console.log(localStorage.getItem('user'));
    this.userEmail = JSON.parse(localStorage.getItem('user') || '{}').email

    this.isUserLoggedIn$ = this.authService.isUserLoggedIn();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
