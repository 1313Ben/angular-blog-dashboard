import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { CategoriesComponent } from './categories/categories.component';

//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { provideFirestore, getFirestore} from '@angular/fire/firestore';
//import { provideAuth, getAuth} from '@angular/fire/auth';
//import { provideFunctions, getFunctions} from '@angular/fire/functions';
//import { provideStorage, getStorage} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    //provideFunctions(() => getFunctions()),
    //provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
