import { ChatComponent } from './pages/home/chat/chat.component';
import { UserProfileComponent } from './pages/user-profile/view/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { JobOffersComponent } from './pages/job-offers/job-offers.component';
import { AddEditJobOfferComponent } from './pages/add-edit-job-offer/add-edit-job-offer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'userPosts', component: UserPostsComponent },
  { path: 'jobOffers', component: JobOffersComponent },
  { path: 'addJobOffer/:id', component: AddEditJobOfferComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
