import { NgModule, CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AdsService } from './Services/ads.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './Authorization/login/login.component';
import { RegistrationComponent } from './Authorization/registration/registration.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';


import { UserModule } from './Profile/user.module';
import { AdsModule } from './Ads/ads.module';
import { AuthService } from './Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AdsModule,
    UserModule,
    RouterModule,
    MatCardModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    AdsService,
    AuthService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
