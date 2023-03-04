import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) { }

  login(email: any, pasword: any) {
    this.afAuth.signInWithEmailAndPassword(email, pasword).then(logRef => {
      this.toastr.success('Logged in Successfully')
      this.router.navigate(['/'])
    }).catch(e => {
      this.toastr.warning(e)
    })
  }
}
