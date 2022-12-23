import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReadingComponent } from './pages/reading/reading.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
