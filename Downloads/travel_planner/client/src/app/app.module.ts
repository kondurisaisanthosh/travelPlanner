import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { RouterModule,Routes } from '@angular/router';
import { MatInputModule,MatCardModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';


const routes:Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NavBarComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
