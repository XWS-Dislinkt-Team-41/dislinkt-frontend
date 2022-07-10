import { ChatComponent } from './pages/chat/chat.component';
import { UserProfileComponent } from './pages/user-profile/view/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { JobOffersComponent } from './pages/job-offers/job-offers.component';
import { AddEditJobOfferComponent } from './pages/add-edit-job-offer/add-edit-job-offer.component';
import { UsersComponent } from './pages/users/users.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { AddPostComponent } from './pages/add-post/add-post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'userPosts', component: UserPostsComponent },
  { path: 'jobOffers', component: JobOffersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'requests', component: FollowRequestsComponent },
  { path: 'addJobOffer/:id', component: AddEditJobOfferComponent },
  { path: 'addPost', component: AddPostComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
