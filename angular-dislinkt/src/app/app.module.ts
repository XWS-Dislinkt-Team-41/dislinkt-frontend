import { ChatComponent } from './pages/home/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { ChangeUserInfoComponent } from './pages/user-profile/edit/change-user-info.component';
import { AdminProfileComponent } from './pages/user-profile/view/admin-profile/admin-profile.component';
import { UserProfileComponent } from './pages/user-profile/view/user-profile.component';
import { CustomerProfileComponent } from './pages/user-profile/view/customer-profile/customer-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { PostComponent } from './components/post-feed/post.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { JobOffersComponent } from './pages/job-offers/job-offers.component';
import { AddEditJobOfferComponent } from './pages/add-edit-job-offer/add-edit-job-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerProfileComponent,
    AdminProfileComponent,
    UserProfileComponent,
    ChangeUserInfoComponent,
    PostComponent,
    NewsFeedComponent,
    UserPostsComponent,
    HomeComponent,
    JobOffersComponent,
    AddEditJobOfferComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
