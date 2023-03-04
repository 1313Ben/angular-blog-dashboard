import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) { }

  login(email: any, pasword: any) {
    this.afAuth.signInWithEmailAndPassword(email, pasword).then(logRef => {
      this.toastr.success('Logged in Successfully')
      this.loadCurrentUser()
      this.loggedIn.next(true)
      this.router.navigate(['/'])
    }).catch(e => {
      this.toastr.warning(e)
    })
  }

  loadCurrentUser() {
    this.afAuth.authState.subscribe(user => {
      //console.log(JSON.parse(JSON.stringify(user)));
      localStorage.setItem('user', JSON.stringify(user)); // browsers localstorage
    })
  }

  logOut() {
    this.afAuth.signOut().then(() => {
      this.toastr.success('User logged out successfully');
      localStorage.removeItem('user');
      this.loggedIn.next(false)
      this.router.navigate(['/login']);
    })
  }

  isUserLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
