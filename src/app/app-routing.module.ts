import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
const routes : Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'counter',
    component : CounterComponent
  },
  {
    path : 'posts',
    component : PostsComponent,
    children: [
      {
        path : 'add',
        component: PostCreateComponent
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
