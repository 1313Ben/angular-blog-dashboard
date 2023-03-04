import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginFormValues: any) {
    //console.log(loginFormValues)
    this.authService.login(loginFormValues.email, loginFormValues.password)
  }
  
}
