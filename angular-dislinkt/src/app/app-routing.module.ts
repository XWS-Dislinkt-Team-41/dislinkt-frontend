import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { UserProfileComponent } from './pages/user-profile/view/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'userPosts', component: UserPostsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
