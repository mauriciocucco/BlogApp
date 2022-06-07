import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [PostsRoutingModule, ScullyLibModule],
})
export class PostsModule {}
